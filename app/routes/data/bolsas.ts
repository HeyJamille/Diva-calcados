import type { Bolsas } from "../types/products";

export const bolsas: Bolsas[] = Array.from({ length: 1 }, (_, i) => {
  const index = i + 1;
  const paddedIndex = String(index).padStart(2, '0'); // Ex: 01, 02, 03...
  return {
    id: index,
    nome: `Bolsa ${paddedIndex}`,
    preco: "Negociável",
    imagem: `/products/bolsas/bolsa${paddedIndex}.jpeg`,
    imagemUrl: `/products/bolsas/bolsa${paddedIndex}.jpeg`,
    cores: ["Nude", "Preto"],
    tamanhos: ["34", "35", "36", "37"]
  };
});
