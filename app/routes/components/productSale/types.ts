export type Producto = {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
};

export type ProductSaleProps = {
  produto: Producto;
  onClick: () => void;
};
