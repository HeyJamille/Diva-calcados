import type { ProdutoBase } from "../types/products";

export function generateWhatsAppMessage(cart: ProdutoBase[]): string {
  if (cart.length === 0) return "";

  const textoProdutos = cart
    .map((item, index) => `${index + 1}. ${item.nome} - ${item.preco}`)
    .join("\n");

  const mensagem = `Olá! 👋
    \n
    Tenho interesse nos seguintes produtos:
    ${textoProdutos}
    \n
    Poderia me passar mais informações? Obrigado!`;

  const url = `https://wa.me/5585999063736?text=${encodeURIComponent(
    mensagem
  )}`;

  return url;
}
