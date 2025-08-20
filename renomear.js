import { rename } from "fs/promises";
import * as fs from "fs";

const nomes = fs
  .readFileSync("nome.txt", "utf-8")
  .split("\n")
  .map((n) => n.trim())
  .filter(Boolean); // ← remove vazios

(async () => {
  for (let i = 0; i < nomes.length; i++) {
    const numero = String(i + 1).padStart(2, "0");
    const antigo = `public/products/sandalias/sandalia${numero}.jpeg`;
    const novo = `public/products/sandalias/a/${nomes[i]}.jpeg`;

    try {
      await rename(antigo, novo);
      console.log(`Renomeado: ${antigo} -> ${novo}`);
    } catch (err) {
      console.error(`Erro ao renomear ${antigo}:`, err);
    }
  }
})();
