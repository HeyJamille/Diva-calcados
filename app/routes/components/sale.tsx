import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

type Produto = {
  id: number;
  nome: string;
  imagem: string;
  preco: string;
  imagemUrl: string;
  cores: string[];
  tamanhos: string[];
};

const Produtos = {
  sandalias: [
    {
      id: 1,
      nome: "Sandália 01",
      imagem: "./products/sandalias/sandalia01.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/sandalia01.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 2,
      nome: "Sandália 02",
      imagem: "./products/sandalias/sandalia02.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/sandalia02.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 3,
      nome: "Sandália 03",
      imagem: "./products/sandalias/sandalia03.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/sandalia03.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 4,
      nome: "Sandália 04",
      imagem: "./products/sandalias/sandalia04.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/sandalia04.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 5,
      nome: "Sandália 05",
      imagem: "./products/sandalias/sandalia05.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/sandalia05.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
  ],
  lingeries: [
    {
      id: 6,
      nome: "Lingerie 01",
      imagem: "./products/lingeries/lingerie01.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/lingeries01.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 7,
      nome: "Lingerie 02",
      imagem: "./products/lingeries/lingerie02.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/lingeries02.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 8,
      nome: "Lingerie 03",
      imagem: "./products/lingeries/lingerie03.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/lingeries03.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 9,
      nome: "Lingerie 04",
      imagem: "./products/lingeries/lingerie04.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/lingeries04.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
    {
      id: 10,
      nome: "Lingerie 05",
      imagem: "./products/lingeries/lingerie05.jpeg",
      preco: "Negociável",
      imagemUrl: "/products/lingeries05.jpeg",
      cores: ["Nude", "Preto"],
      tamanhos: ["34", "35", "36", "37"],
    },
  ],
};

export default function Sale() {
  const [selectedItem, setSelectedItem] = useState<Produto | null>(null);
  const [corSelecionada, setCorSelecionada] = useState<string | null>(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(
    null
  );

  const closeModal = () => setSelectedItem(null);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!corSelecionada || !tamanhoSelecionado) {
      alert("Selecione uma cor e um tamanho antes de adicionar ao carrinho.");
      return;
    }

    addToCart({
      ...selectedItem!,
      corSelecionada,
      tamanhoSelecionado,
    });

    // Limpa seleção
    setCorSelecionada("");
    setTamanhoSelecionado("");

    closeModal();
  };

  return (
    <section className="bg-white text-gray-200 min-h-screen px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-black mb-10 text-center">
        Promoções Especiais
      </h2>

      {/* Sandálias */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-black mb-6">
          Sandálias em Oferta
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Produtos.sandalias.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="text-black w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-black">
                  {item.nome}
                </h4>
                <p className="text-gray-900">{item.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto p-4">
          <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-6 w-[700px] relative gap-6">
            <img
              src={selectedItem.imagem}
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
                <p className="font-semibold text-gray-800">
                  Cores disponíveis:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedItem.cores.map((cor, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCorSelecionada(cor)}
                      className={`px-3 py-1 rounded-full text-sm border transition-all
                        ${
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
                <p className="font-semibold text-gray-800">
                  Tamanhos disponíveis:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedItem.tamanhos.map((tamanhos, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setTamanhoSelecionado(tamanhos)}
                      className={`px-3 py-1 rounded-full text-sm border transition-all
                        ${
                          tamanhoSelecionado === tamanhos
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300"
                        }`}
                    >
                      {tamanhos}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-between gap-4">
                <button
                  onClick={handleAddToCart}
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
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Lingeries */}
      <div>
        <h3 className="text-2xl font-semibold text-black mb-6">
          Lingeries em Oferta
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Produtos.lingeries.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="text-black w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-black">
                  {item.nome}
                </h4>
                <p className="text-gray-900">{item.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto p-4">
          <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-6 w-[700px] relative gap-6">
            <img
              src={selectedItem.imagem}
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
                <p className="font-semibold text-gray-800">
                  Cores disponíveis:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedItem.cores.map((cor, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCorSelecionada(cor)}
                      className={`px-3 py-1 rounded-full text-sm border transition-all
                        ${
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
                <p className="font-semibold text-gray-800">
                  Tamanhos disponíveis:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedItem.tamanhos.map((tamanhos, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setTamanhoSelecionado(tamanhos)}
                      className={`px-3 py-1 rounded-full text-sm border transition-all
                        ${
                          tamanhoSelecionado === tamanhos
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300"
                        }`}
                    >
                      {tamanhos}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-between gap-4">
                <button
                  onClick={handleAddToCart}
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
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
