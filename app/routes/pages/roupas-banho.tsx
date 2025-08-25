import React, { useState } from "react";

// Icons
import { FaWhatsapp } from "react-icons/fa";

// Components
import Menu from "../components/menu";
import { ModalProduto } from "../components/modalProduct";
import { Cabecalho } from "../components/cabecalho";
import ProdutoCard from "../components/productCard";
import Rodape from "../components/rodape";

// Context
import { useCart } from "../../context/cartContext";

// Data
import { maio, biquini, saida, masculino } from "../data/lingeries";

// Types
import type { Lingeries } from "../types/products";

export default function LingeriesPages() {
  // Estados
  const [selectedItem, setSelectedItem] = useState<Lingeries | null>(null);
  const [corSelecionada, setCorSelecionada] = useState<string>("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal
  const closeModal = () => setSelectedItem(null);

  // Contexto
  const { addToCart } = useCart();

  // Lista de categorias (fica mais fácil de expandir depois)
  const categorias = [
    { title: "Maiôs", produtos: maio },
    { title: "Biquínis", produtos: biquini },
    { title: "Saídas", produtos: saida },
    { title: "Masculino", produtos: masculino },
  ];

  return (
    <article>
      <Menu />

      <section className="bg-white text-gray-800 min-h-screen px-6 py-10 md:px-10 mt-20">
        {/* Header principal */}
        <Cabecalho
          title="Roupas de Banho"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Loop nas categorias */}
        {categorias.map((categoria) => {
          const filtered = categoria.produtos.filter((produto) =>
            produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return (
            <div key={categoria.title} className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">
                {categoria.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {filtered.length > 0 ? (
                  filtered.map((product) => (
                    <ProdutoCard
                      key={product.id}
                      produto={product}
                      onClick={() => setSelectedItem(product)}
                    />
                  ))
                ) : (
                  <p>Nenhum item encontrado.</p>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Modal único */}
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

      {/* WhatsApp */}
      <a
        className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition"
        href="https://wa.me/5585985595993"
      >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </a>

      {/* Footer */}
      <Rodape />
    </article>
  );
}
