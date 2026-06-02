require("dotenv").config();

const express = require("express");
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
  "http://127.0.0.1:3000",
  "http://localhost:5173",
  "https://visionarydynamicsas.com",
  "https://www.visionarydynamicsas.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
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
    exposedHeaders: ["Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
  })
);



// 🔥 Compression (Performance Boost)
app.use(compression());

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
      secure: true,
      httpOnly: true,
      sameSite: "none",
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

// Frontend Build
const distPath = path.join(__dirname, "dist");

app.use(
  express.static(distPath, {
    maxAge: "1y",
    etag: false,
  })
);

// ========================
// 🧠 SITEMAP
// ========================
app.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://visionarydynamicsas.com",
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
// 🌐 FRONTEND ROUTE
// ========================
app.use((req, res, next) => {

  if (req.path.startsWith("/api")) {
    return next();
  }

  res.sendFile(
    path.resolve(distPath, "index.html")
  );

});

// ========================
// 🚀 START SERVER
// ========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});