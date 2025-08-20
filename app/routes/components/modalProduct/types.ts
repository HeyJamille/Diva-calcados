import type { Dispatch, SetStateAction } from "react";
import type { ProdutoBase, ProdutoCarrinho } from "../../types/products";

export type ModalProdutoProps = {
  selectedItem: ProdutoBase | null;
  corSelecionada: string;
  setCorSelecionada: Dispatch<SetStateAction<string>>;
  tamanhoSelecionado: string;
  setTamanhoSelecionado: Dispatch<SetStateAction<string>>;
  closeModal: () => void;
  addToCart: (produto: ProdutoCarrinho) => void;
};
