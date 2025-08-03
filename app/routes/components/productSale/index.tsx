import type { ProductSaleProps } from "./types";

export default function ProdutoSale({ produto, onClick }: ProductSaleProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
    >
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-black">{produto.nome}</h4>
        <p className="text-gray-900">{produto.preco}</p>
      </div>
    </div>
  );
}
