export interface ProdutoBase {
  id: number;
  nome: string;
  imagemUrl: string;
  preco: string;
  cores: string[];
  tamanhos: string[];
}

export type ProdutoCarrinho = ProdutoBase & {
  corSelecionada: string;
  tamanhoSelecionado: string;
};

// Specific types for each product category
export type Sandalias = ProdutoBase;
export type Lingeries = ProdutoBase;
export type RoupasBebe = ProdutoBase;
export type Bolsas = ProdutoBase;
export type ProductSale = ProdutoBase;
