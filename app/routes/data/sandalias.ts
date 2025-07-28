import { type Sandalias } from "../types/products";

export const sandalias: Sandalias[] = Array.from({ length: 100 }, (_, i) => {
  const index = i + 1;
  const paddedIndex = String(index).padStart(2, '0'); // Ex: 01, 02, 03...
  return {
    id: index,
    nome: `Sandália ${paddedIndex}`,
    preco: "Negociável",
    imagem: `/products/sandalias/sandalia${paddedIndex}.jpeg`,
    imagemUrl: `/products/sandalias/sandalia${paddedIndex}.jpeg`,
    cores: ["Nude", "Preto"],
    tamanhos: ["34", "35", "36", "37"]
  };
});
