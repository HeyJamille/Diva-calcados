import { type ProdutoBase, type ProdutoCarrinho } from "../types/products";

type AddToCartParams = {
  selectedItem: ProdutoBase | null;
  corSelecionada: string;
  tamanhoSelecionado: string;
  addToCart: (produto: ProdutoCarrinho) => void;
  setCorSelecionada: (cor: string) => void;
  setTamanhoSelecionado: (tamanho: string) => void;
  closeModal: () => void;
};

export function handleAddToCart({
  selectedItem,
  corSelecionada,
  tamanhoSelecionado,
  addToCart,
  setCorSelecionada,
  setTamanhoSelecionado,
  closeModal,
}: AddToCartParams) {
  if (!corSelecionada || !tamanhoSelecionado || !selectedItem) {
    alert("Selecione uma cor, um tamanho e um item.");
    return;
  }

  const produtoCarrinho = {
    ...selectedItem,
    corSelecionada,
    tamanhoSelecionado,
  };

  addToCart(produtoCarrinho);

  setCorSelecionada("");
  setTamanhoSelecionado("");
  closeModal();
}
