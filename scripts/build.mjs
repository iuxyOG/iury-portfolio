import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const server = resolve(dist, "server");

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });

await cp(resolve(root, "assets"), resolve(client, "assets"), { recursive: true });
await cp(resolve(root, "index.html"), resolve(client, "index.html"));

const workerSource = await readFile(resolve(root, "worker", "index.js"), "utf8");
await writeFile(resolve(server, "index.js"), workerSource, "utf8");

console.log("Portfolio build concluído em dist/.");
