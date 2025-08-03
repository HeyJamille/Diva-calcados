export type ProdutoCardProps = {
  produto: {
    id: number;
    nome: string;
    preco: string;
    imagemUrl: string;
  };
  onClick: () => void;
};
