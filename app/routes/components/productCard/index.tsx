import { type ProdutoCardProps } from "./types";

export default function ProdutoCard({ produto, onClick }: ProdutoCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer"
      title={`Ver detalhes de ${produto.nome}`}
    >
      <img
        src={produto.imagemUrl}
        alt={produto.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-black truncate">
          {produto.nome}
        </h4>
        <p className="text-gray-700">{produto.preco}</p>
      </div>
    </div>
  );
}
