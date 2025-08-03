import React, { useState } from "react";

// Icons
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";

// Components
import Menu from "../components/menu";
import { ModalProduto } from "../components/modalProduct";
import Rodape from "../components/rodape";
import { Cabecalho } from "../components/cabecalho";
import ProdutoCard from "../components/productCard";

// Datas
import { bolsas } from "../data/bolsas";

// Types
import type { Bolsas } from "../types/products";

// Contexts
import { useCart } from "../../context/cartContext";

export default function BolsasPages() {
  // UseState
  const [selectedItem, setSelectedItem] = useState<Bolsas | null>(null);
  const [corSelecionada, setCorSelecionada] = useState<string>("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  // COntext
  const { addToCart } = useCart();

  // Modal
  const closeModal = () => setSelectedItem(null);

  // Filter
  const filteredBolsas = bolsas.filter((bolsa) =>
    bolsa.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <article>
      <Menu />

      <section className="bg-white text-gray-800 min-h-screen px-6 py-10 md:px-10 mt-20">
        {/* Header */}
        <Cabecalho
          title="Bolsas"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredBolsas.length > 0 ? (
            filteredBolsas.map((product) => (
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

      {/* WhatsApp */}
      <a
        className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition"
        href="https://wa.me/5585985595993"
        aria-label="Contato WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </a>

      <Rodape />
    </article>
  );
}
