export interface ProdutoBase {
  id: number;
  nome: string;
  imagemUrl: string;
  preco: string;
  cores: { nome: string; imagemUrl: string }[]; // each color has an image
  tamanhos: string[];
}

export interface ProdutoCarrinho extends ProdutoBase {
  corSelecionada: string;
  tamanhoSelecionado: string;
}

// Specific types for each product category
export type Sandalias = ProdutoBase;
export type RoupasBanho = ProdutoBase;
export type RoupasBebe = ProdutoBase;
export type Bolsas = ProdutoBase;
export type ProductSale = ProdutoBase;
