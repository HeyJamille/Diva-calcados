import type { ProdutoBase } from "../types/products";

export const sandalias: ProdutoBase[] = Array.from({ length: 5 }, (_, i) => {
  const index = i + 1;
  const paddedIndex = String(index).padStart(2, "0");

  return {
    id: index,
    nome: `Sandália ${paddedIndex}`,
    preco: "Negociável",
    imagem: `/products/sandalias/sandalia${paddedIndex}.jpeg`,
    imagemUrl: `/products/sandalias/sandalia${paddedIndex}.jpeg`,
    cores: ["Preto", "Marrom", "Bege"],
    tamanhos: ["34", "35", "36", "37", "38"],
  };
});

export const lingeries: ProdutoBase[] = Array.from({ length: 5 }, (_, i) => {
  const index = i + 1;
  const paddedIndex = String(index).padStart(2, "0");

  return {
    id: index + 100,
    nome: `Lingerie ${paddedIndex}`,
    preco: "Negociável",
    imagem: `/products/lingeries/lingerie${paddedIndex}.jpeg`,
    imagemUrl: `/products/lingeries/lingerie${paddedIndex}.jpeg`,
    cores: ["Branco", "Preto", "Vermelho"],
    tamanhos: ["P", "M", "G", "GG"],
  };
});
