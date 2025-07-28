import type { Lingeries } from "../types/products";

export const lingeries: Lingeries[] = Array.from({ length: 5 }, (_, i) => {
  const index = i + 1;
  const paddedIndex = String(index).padStart(2, '0'); // Ex: 01, 02, 03...
  return {
    id: index,
    nome: `Lingerie ${paddedIndex}`,
    preco: "Negociável",
    imagem: `/products/lingeries/lingerie${paddedIndex}.jpeg`,
    imagemUrl: `/products/lingeries/lingerie${paddedIndex}.jpeg`,
    cores: ["Nude", "Preto"],
    tamanhos: ["34", "35", "36", "37"]
  };
});
