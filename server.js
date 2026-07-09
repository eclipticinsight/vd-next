// Force redeploy restart - 2026-07-07 22:50
require("dotenv").config();

const express = require("express");
const fs = require("fs");

// Ensure uploads directory exists (Azure restarts wipe ephemeral storage)
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads", { recursive: true });
const app = express();

app.set("trust proxy", 1);

const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const compression = require("compression");

// DB
const connectDB = require("./config/db");

// Routes
const paymentRoutes = require("./routes/paymentRoutes");
const blogRoutes = require("./routes/blogRoutes");

// Auth
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const { SitemapStream, streamToPromise } = require("sitemap");

const routes = require("./config/routes");
const Blog = require("./models/Blog");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

// ========================
// ✅ CONNECT DATABASE
// ========================
connectDB();

// ========================
// ✅ MIDDLEWARE
// ========================

// 🔥 CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://visionarydynamicsas.com",
  "https://www.visionarydynamicsas.com",
  "https://vd-next.vercel.app",
  // Azure App Service domains
  "https://visionarydynamicsas.azurewebsites.net",
  "https://vd-frontend.azurewebsites.net",
];

if (process.env.FRONTEND_URL) {
  const normalizedUrl = process.env.FRONTEND_URL.trim().replace(/\/$/, "");
  if (!allowedOrigins.includes(normalizedUrl)) {
    allowedOrigins.push(normalizedUrl);
  }
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel preview URLs
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      // Allow all Azure App Service URLs
      if (origin.endsWith(".azurewebsites.net")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
  })
);



// 🔥 Compression (Performance Boost)
app.use(compression());

// 🔥 Serve/Proxy Frontend in Production
if (process.env.NODE_ENV === "production" || !!process.env.WEBSITE_INSTANCE_ID) {
  const { fork } = require("child_process");
  const http = require("http");
  const nextPort = 3000;

  console.log(`🚀 Starting Next.js standalone server on port ${nextPort}`);
  const fs = require("fs");
  let frontendPath = path.join(__dirname, "frontend/server.js");
  if (!fs.existsSync(frontendPath)) {
    frontendPath = path.join(__dirname, ".next/standalone/frontend/server.js");
  }

  const nextProcess = fork(
    frontendPath,
    [],
    {
      env: {
        ...process.env,
        PORT: nextPort.toString(),
        HOSTNAME: "127.0.0.1",
      },
      stdio: "inherit",
    }
  );

  nextProcess.on("error", (err) => {
    console.error("❌ Failed to start Next.js server:", err);
  });

  // Clean up Next.js child process when Express exits
  const cleanup = () => {
    console.log("Stopping Next.js standalone server...");
    try {
      nextProcess.kill("SIGTERM");
    } catch (err) {
      // ignore
    }
  };

  process.on("exit", cleanup);
  process.on("SIGINT", () => {
    cleanup();
    process.exit(0);
  });
  process.on("SIGTERM", () => {
    cleanup();
    process.exit(0);
  });

  // Proxy middleware for non-API routes (placed before body parsers)
  app.use((req, res, next) => {
    if (
      req.path.startsWith("/api") ||
      req.path.startsWith("/uploads") ||
      req.path === "/sitemap.xml"
    ) {
      return next();
    }

    const proxyReq = http.request(
      {
        host: "127.0.0.1",
        port: nextPort,
        path: req.url,
        method: req.method,
        headers: req.headers,
      },
      (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      }
    );

    req.pipe(proxyReq, { end: true });

    proxyReq.on("error", (err) => {
      console.error("❌ Frontend Proxy error:", err.message);
      res.status(500).send("Frontend Proxy Error");
    });
  });
}

// 🔥 Body Parsers
app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

// ========================
// 🔐 SESSION + PASSPORT
// ========================
app.use(
  session({
    secret: process.env.SESSION_SECRET || "super_secret_key",
    resave: false,
    saveUninitialized: false,

    cookie: {
      secure: process.env.NODE_ENV === "production" || !!process.env.WEBSITE_INSTANCE_ID,
      httpOnly: true,
      sameSite: (process.env.NODE_ENV === "production" || !!process.env.WEBSITE_INSTANCE_ID) ? "none" : "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ========================
// 📦 API ROUTES
// ========================
app.use("/api/blogs", blogRoutes);

app.use("/api/form", require("./routes/formRoutes"));

app.use(
  "/api/testimonials",
  require("./routes/testimonialRoutes")
);

app.use("/api/offers", require("./routes/offerRoutes"));

app.use("/api/payment", paymentRoutes);

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

// ========================
// ✅ TEST ROUTE
// ========================
app.get("/api/test-deploy", (req, res) => {
  res.json({
    deployed: true,
    version: "bookkeeping-v3-and-location-v1",
    timestamp: Date.now()
  });
});

app.get("/api", (req, res) => {
  res.send("API is running...");
});

// ========================
// 📸 STATIC FILES
// ========================

// Uploads Cache
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    maxAge: "30d",
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Visionary Dynamics API Running",
  });
});

// ========================
// 🧠 SITEMAP
// ========================
app.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://www.visionarydynamicsas.com",
    });

    // Static Routes
    routes.forEach((route) => {
      smStream.write({
        url: route,
        changefreq: "weekly",
        priority: 0.8,
      });
    });

    // Blog Routes
    const blogs = await Blog.find();

    blogs.forEach((blog) => {
      if (blog.slug) {
        smStream.write({
          url: `/blog/${blog.slug}`,
          lastmod: blog.updatedAt,
          changefreq: "weekly",
          priority: 0.7,
        });
      }
    });

    smStream.end();

    const sitemap = await streamToPromise(smStream);

    res.header("Content-Type", "application/xml");

    res.send(sitemap.toString());

  } catch (error) {
    console.error("Sitemap Error:", error);

    res.status(500).end();
  }
});



// ========================
// 🚀 START SERVER
// ========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});