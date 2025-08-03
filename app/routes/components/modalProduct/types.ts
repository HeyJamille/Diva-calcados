import type { Dispatch, SetStateAction } from "react";
import type { ProdutoBase } from "../../types/products";

export type ModalProdutoProps = {
  selectedItem: ProdutoBase | null;
  corSelecionada: string;
  setCorSelecionada: Dispatch<SetStateAction<string>>;
  tamanhoSelecionado: string;
  setTamanhoSelecionado: Dispatch<SetStateAction<string>>;
  closeModal: () => void;
  addToCart: (produto: ProdutoBase) => void;
};
