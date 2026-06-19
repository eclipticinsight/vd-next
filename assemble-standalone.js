const fs = require("fs");

const path = require("path");

const rootDir = path.resolve(__dirname);

const standaloneDir = path.join(
  rootDir,
  ".next",
  "standalone"
);

const staticSrc = path.join(
  rootDir,
  ".next",
  "static"
);

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

  // Copy package.json and package-lock.json to standalone
  const rootPackageJsonPath = path.join(rootDir, "package.json");
  const rootPackageLockPath = path.join(rootDir, "package-lock.json");
  const destPackageJsonPath = path.join(standaloneDir, "package.json");
  const destPackageLockPath = path.join(standaloneDir, "package-lock.json");

  console.log("Copying package.json and package-lock.json to standalone");
  await fs.promises.copyFile(rootPackageJsonPath, destPackageJsonPath);
  if (fs.existsSync(rootPackageLockPath)) {
    await fs.promises.copyFile(rootPackageLockPath, destPackageLockPath);
  }

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
