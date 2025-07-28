import type { RoupasBebe } from "../types/products";

export const roupasBebe: RoupasBebe[] = Array.from({ length: 14}, (_, i) => {
  const index = i + 1;
  const paddedIndex = String(index).padStart(2, '0'); // Ex: 01, 02, 03...
  return {
    id: index,
    nome: `Roupa de bebê ${paddedIndex}`,
    preco: "Negociável",
    imagem: `/products/roupas de bebe/roupa-bebe${paddedIndex}.jpeg`,
    imagemUrl: `/products/roupas de bebe/roupa-bebe${paddedIndex}.jpeg`,
    cores: ["Nude", "Preto"],
    tamanhos: ["34", "35", "36", "37"]
  };
});
