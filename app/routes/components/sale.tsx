import React, { useState } from "react";

// Context
import { useCart } from "../../context/cartContext";

// Icons
import { FaShoppingCart } from "react-icons/fa";

// Modal
import { ModalProduto } from "./modalProduct";

// Tipos
import type { ProductSale } from "../types/products";

// Dados
import { sandalias, lingeries } from "../data/productSale"; // certifique-se que está exportando corretamente

export default function Sale() {
  const [selectedItem, setSelectedItem] = useState<ProductSale | null>(null);
  const [corSelecionada, setCorSelecionada] = useState<string>("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string>("");

  const { addToCart } = useCart();
  const closeModal = () => setSelectedItem(null);

  const renderCards = (itens: ProductSale[]) =>
    itens.map((item) => (
      <div
        key={item.id}
        className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
        onClick={() => setSelectedItem(item)}
      >
        <img
          src={item.imagemUrl}
          alt={item.nome}
          className="text-black w-full h-48 object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold text-black">{item.nome}</h4>
          <p className="text-gray-900">{item.preco}</p>
        </div>
      </div>
    ));

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
          {renderCards(sandalias)}
        </div>
      </div>

      {/* Lingeries */}
      <div>
        <h3 className="text-2xl font-semibold text-black mb-6">
          Lingeries em Oferta
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {renderCards(lingeries)}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <ModalProduto
          selectedItem={selectedItem}
          corSelecionada={corSelecionada}
          tamanhoSelecionado={tamanhoSelecionado}
          closeModal={closeModal}
          addToCart={addToCart}
          setCorSelecionada={setCorSelecionada}
          setTamanhoSelecionado={setTamanhoSelecionado}
        />
      )}
    </section>
  );
}
