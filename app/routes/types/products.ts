// src/types/products.ts

export interface ProdutoBase {
  id: number;
  nome: string;
  imagem: string;
  imagemUrl: string;
  preco: string;
  cores: string[];
  tamanhos: string[];
}

// Tipos específicos para cada categoria de produto (apenas alias)
export type Sandalias = ProdutoBase;
export type Lingeries = ProdutoBase;
export type RoupasBebe = ProdutoBase;
export type Bolsas = ProdutoBase;
