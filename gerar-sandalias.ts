import { readFileSync, writeFileSync } from "fs";

// Lê e prepara os nomes
const nomes = readFileSync("nome.txt", "utf-8")
  .split("\n")
  .map((linha) => linha.trim())
  .filter((linha) => linha.length > 0);

// Gera os objetos de produto
const sandalias = nomes.map((nome, index) => {
  const nomeFormatado = nome.replace(/-/g, " ");
  return `{
    id: ${index + 1},
    nome: "Sandália ${nomeFormatado}",
    preco: "Negociável",
    imagemUrl: "public/products/sandalias/a/${nome}.jpeg",
    cores: ["Nude", "Preto"],
    tamanhos: ["34", "35", "36", "37"]
  }`;
});

// Cria o conteúdo final do arquivo TypeScript
const conteudo = `import { type Sandalias } from "../types/products";

export const sandalias: Sandalias[] = [
  ${sandalias.join(",\n  ")}
];
`;

// Salva no arquivo
writeFileSync("sandalias.ts", conteudo);
console.log("✅ Arquivo sandalias.ts gerado com sucesso!");
