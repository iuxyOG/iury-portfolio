import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(resolve(root, "index.html"), "utf8");

const failures = [];
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

if (duplicateIds.length) failures.push(`IDs duplicados: ${duplicateIds.join(", ")}`);
if (!html.includes("<title>Iury Nascimento")) failures.push("Título principal ausente.");
if (!html.includes('lang="pt-BR"')) failures.push("Idioma pt-BR ausente.");
if (/<img(?![^>]*\salt=)[^>]*>/i.test(html)) failures.push("Imagem sem texto alternativo.");
if (/target="_blank"(?![^>]*rel="[^"]*noopener)/i.test(html)) failures.push("Link externo sem noopener.");
if (/Iury Henrique|Vansh|Lorem ipsum/i.test(html)) failures.push("Conteúdo antigo encontrado.");

const localReferences = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((value) => !/^(?:https?:|mailto:|tel:|#)/.test(value));

for (const reference of localReferences) {
  try {
    await access(resolve(root, reference));
  } catch {
    failures.push(`Arquivo local ausente: ${reference}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validação concluída: ${ids.length} IDs únicos e ${localReferences.length} recursos locais.`);
