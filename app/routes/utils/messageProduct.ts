import type { ProdutoCarrinho } from "../types/products";

export function generateWhatsAppMessage(cart: ProdutoCarrinho[]): string {
  if (cart.length === 0) return "";

  const textoProdutos = cart
    .map(
      (item, index) =>
        `${index + 1}. ${item.nome} - ${item.corSelecionada} - ${
          item.tamanhoSelecionado
        }`
    )
    .join("\n");

  const mensagem = `Olá! 👋

Tenho interesse nos seguintes produtos:
${textoProdutos}

Poderia me passar mais informações?`;

  const url = `https://wa.me/5585985595993?text=${encodeURIComponent(
    mensagem
  )}`;

  return url;
}
