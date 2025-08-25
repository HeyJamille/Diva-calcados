import { useState } from "react";

// Contexts
import { useCart } from "../../context/cartContext";

// Icons
import { FiTrash } from "react-icons/fi";

// Utils
import { generateWhatsAppMessage } from "../utils/messageProduct";

// Components
import { SideMenu } from "./sideMenu";

export default function Menu() {
  // UseState
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  // Context
  const { cart, removeFromCart } = useCart();

  // Message
  const message = generateWhatsAppMessage(cart);

  const handleTrash = (id: number) => {
    removeFromCart(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50">
      {/* Barra superior */}
      <aside className="flex justify-between items-center p-5 md:px-10 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">DIVA</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-10">
          <a href="/" className="text-lg">
            Home
          </a>
          <a href="/produtos/roupas-banho" className="text-lg">
            Roupas de Banho
          </a>
          <a href="/produtos/roupas-bebe" className="text-lg">
            Roupas de Bebê
          </a>
          <a href="/produtos/sandalias" className="text-lg">
            Sandálias
          </a>
          <a href="/produtos/bolsas" className="text-lg">
            Bolsas
          </a>
        </nav>

        {/* Icons Desktop */}
        <section className="hidden md:flex gap-5 items-center">
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOpenCart(true)}
          >
            <img className="h-6 w-6" src="/icons/bag.svg" alt="Carrinho" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </section>

        {/* Carrinho e Hamburguer Menu Mobile */}
        <section className="flex flex-row items-center justify-center gap-5 md:hidden">
          <div className="flex gap-5">
            <div
              className="relative cursor-pointer"
              onClick={() => setIsOpenCart(true)}
            >
              <img className="h-6 w-6" src="/icons/bag.svg" alt="Carrinho" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          {/* Hamburger Menu Button Mobile */}
          <button onClick={() => setIsOpen(true)} aria-label="Abrir menu">
            <img className="h-8 w-8" src="/icons/menu.svg" alt="Abrir menu" />
          </button>
        </section>
      </aside>

      {/* Overlay Menu Principal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Overlay Menu Carrinho */}
      {isOpenCart && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsOpenCart(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Menu Lateral à Direita - Menu Principal (mobile) */}
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Menu lateral carrinho */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-90 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpenCart ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpenCart}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Carrinho</h2>
          <button
            onClick={() => setIsOpenCart(false)}
            aria-label="Fechar carrinho"
          >
            <img className="h-8 w-8" src="/icons/close.svg" alt="Fechar" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-145 p-4">
          <div className="overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 mt-2">Carrinho vazio</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-around gap-1 mb-4 border-b pb-2"
                >
                  <img
                    src={item.imagemUrl}
                    alt={item.nome}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.nome}</p>
                    <p className="text-gray-600">Cor: {item.corSelecionada}</p>
                    <p className="text-gray-600">
                      Tamanho: {item.tamanhoSelecionado}
                    </p>
                  </div>
                  <FiTrash
                    className="text-xl"
                    onClick={() => handleTrash(item.id)}
                  />
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <a
              className="mt-4 w-50 self-center bg-black text-white rounded-full px-6 py-3 shadow-lg hover:bg-gray-800 transition text-center"
              href={message}
              target="_blank"
              rel="noopener noreferrer"
            >
              Finalizar compras
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
