// GitHub Pages serves static files only: copy the SPA entry point to every
// client-side route so that direct links and reloads work, plus a 404 fallback.
import { copyFileSync, mkdirSync } from "node:fs";

const routes = ["privacy", "cookie-policy"];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${route}/index.html`);
}
copyFileSync("dist/index.html", "dist/404.html");
