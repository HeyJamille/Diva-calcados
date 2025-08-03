import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { type ModalProdutoProps } from "./types";

// utils
import { handleAddToCart } from "../../utils/addCarts";

export const ModalProduto: React.FC<ModalProdutoProps> = ({
  selectedItem,
  corSelecionada,
  tamanhoSelecionado,
  setCorSelecionada,
  setTamanhoSelecionado,
  closeModal,
  addToCart,
}) => {
  if (!selectedItem) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-6 w-[700px] relative gap-6">
        <img
          src={selectedItem.imagemUrl}
          alt={selectedItem.nome}
          className="w-[200px] md:w-1/2 h-full object-cover rounded"
        />

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {selectedItem.nome}
          </h3>
          <p className="text-lg font-medium mb-2 text-gray-700">
            Preço: {selectedItem.preco}
          </p>

          <div className="mb-3">
            <p className="font-semibold text-gray-800">Cores disponíveis:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {selectedItem.cores.map((cor, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCorSelecionada(cor)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all ${
                    corSelecionada === cor
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300"
                  }`}
                >
                  {cor}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <p className="font-semibold text-gray-800">Tamanhos disponíveis:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {selectedItem.tamanhos.map((tamanho, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTamanhoSelecionado(tamanho)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all ${
                    tamanhoSelecionado === tamanho
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300"
                  }`}
                >
                  {tamanho}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-4">
            <button
              onClick={() =>
                handleAddToCart({
                  selectedItem,
                  corSelecionada,
                  tamanhoSelecionado,
                  addToCart,
                  setCorSelecionada,
                  setTamanhoSelecionado,
                  closeModal,
                })
              }
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <FaShoppingCart />
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          aria-label="Fechar modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
