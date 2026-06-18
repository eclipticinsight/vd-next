const fs = require("fs");

const path = require("path");

const rootDir = path.resolve(__dirname);

const standaloneDir = path.join(rootDir, ".next", "standalone");

const staticSrc = path.join(rootDir, ".next", "static");

const staticDest = path.join(standaloneDir, ".next", "static");

const publicSrc = path.join(rootDir, "frontend", "public");

const publicDest = path.join(standaloneDir, "frontend", "public");

async function copyRecursive(src, dest) {

  if (!fs.existsSync(src)) {

    throw new Error(`Source path not found: ${src}`);

  }

  await fs.promises.rm(dest, { recursive: true, force: true });

  await fs.promises.mkdir(path.dirname(dest), { recursive: true });

  await fs.promises.cp(src, dest, { recursive: true });

}

async function main() {
  if (!fs.existsSync(standaloneDir)) {
    throw new Error(
      `Standalone folder not found. Run next build first and then retry.`
    );
  }

  console.log(`Assembling standalone output at: ${standaloneDir}`);

  console.log(`Copying static assets: ${staticSrc} -> ${staticDest}`);
  await copyRecursive(staticSrc, staticDest);

  console.log(`Copying public assets: ${publicSrc} -> ${publicDest}`);
  await copyRecursive(publicSrc, publicDest);

  // Copy backend files to standalone directory
  const backendFiles = [
    "server.js",
    "config",
    "routes",
    "models",
    "middleware",
    "uploads",
    "web.config",
  ];

  for (const item of backendFiles) {
    const srcPath = path.join(rootDir, item);
    const destPath = path.join(standaloneDir, item);
    if (fs.existsSync(srcPath)) {
      console.log(`Copying backend item: ${item} -> ${destPath}`);
      await copyRecursive(srcPath, destPath);
    }
  }

  // Copy .env if it exists
  const envSrc = path.join(rootDir, ".env");
  const envDest = path.join(standaloneDir, ".env");
  if (fs.existsSync(envSrc)) {
    console.log(`Copying .env file to standalone`);
    await fs.promises.copyFile(envSrc, envDest);
  }

  // Generate a minimal package.json in standalone to prune dependencies
  const rootPackageJsonPath = path.join(rootDir, "package.json");
  const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath, "utf8"));
  
  const backendDeps = [
    "bcryptjs",
    "compression",
    "cookie-parser",
    "cors",
    "dotenv",
    "express",
    "express-session",
    "jsonwebtoken",
    "mongoose",
    "multer",
    "nodemailer",
    "passport",
    "passport-google-oauth20",
    "sitemap",
    "slugify",
    "stripe",
    "next",
    "react",
    "react-dom",
    "sharp"
  ];

  const standaloneDeps = {};
  for (const dep of backendDeps) {
    if (rootPackageJson.dependencies && rootPackageJson.dependencies[dep]) {
      standaloneDeps[dep] = rootPackageJson.dependencies[dep];
    } else if (rootPackageJson.devDependencies && rootPackageJson.devDependencies[dep]) {
      standaloneDeps[dep] = rootPackageJson.devDependencies[dep];
    } else {
      standaloneDeps[dep] = "latest";
    }
  }

  const standalonePackageJson = {
    name: "vd-next-standalone",
    version: rootPackageJson.version || "1.0.0",
    private: true,
    scripts: {
      "start": "node server.js"
    },
    dependencies: standaloneDeps
  };

  const standalonePackageJsonPath = path.join(standaloneDir, "package.json");
  await fs.promises.writeFile(
    standalonePackageJsonPath,
    JSON.stringify(standalonePackageJson, null, 2),
    "utf8"
  );
  console.log(`Created standalone package.json with targeted dependencies`);

  // Rename Next.js server.js to next-server.js
  const frontendServerJs = path.join(standaloneDir, "frontend", "server.js");
  const frontendNextServerJs = path.join(standaloneDir, "frontend", "next-server.js");

  if (fs.existsSync(frontendServerJs)) {
    console.log(`Renaming ${frontendServerJs} to next-server.js`);
    await fs.promises.rename(frontendServerJs, frontendNextServerJs);
  }

  // Create new frontend/server.js wrapper script
  console.log(`Creating wrapper entrypoint at ${frontendServerJs}`);
  const wrapperContent = `// Wrapper entrypoint to start Express backend when Azure starts Next.js
const path = require('path');
process.chdir(path.join(__dirname, '..'));
require('../server.js');
`;
  await fs.promises.writeFile(frontendServerJs, wrapperContent, "utf8");

  console.log("Standalone assemble complete.");
}

main().catch((error) => {
  console.error("Failed to assemble standalone output:", error);
  process.exit(1);
});
