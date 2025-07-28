import { useState } from "react";
import { useCart } from "../../context/cartContext"; // ajuste o path se necessário

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false); // menu lateral principal
  const [isOpenCart, setIsOpenCart] = useState(false); // menu lateral do carrinho

  const { cart } = useCart();

  return (
    <header className="relative">
      {/* Barra superior */}
      <aside className="flex justify-between items-center p-5 md:px-10 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">DIVA</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-10">
          <a href="/" className="text-lg">Home</a>
          <a href="/produtos/lingeries" className="text-lg">Lingeries</a>
          <a href="/produtos/roupas-bebe" className="text-lg">Roupas de Bebê</a>
          <a href="/produtos/sandalias" className="text-lg">Sandálias</a>
          <a href="/produtos/bolsas" className="text-lg">Bolsas</a>
        </nav>

        {/* Icons Desktop */}
        <div className="hidden md:flex gap-5 items-center">
          <img className="h-6 w-6 cursor-pointer" src="/icons/heart.svg" alt="Favoritos" />
          <div className="relative cursor-pointer" onClick={() => setIsOpenCart(true)}>
            <img className="h-6 w-6" src="/icons/bag.svg" alt="Carrinho" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Hamburger Menu Button Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden"
          aria-label="Abrir menu"
        >
          <img className="h-8 w-8" src="/icons/menu.svg" alt="Abrir menu" />
        </button>
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
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">DIVA</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Fechar menu">
            <img className="h-8 w-8" src="/icons/close.svg" alt="Fechar" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-5">
          <a href="/" className="text-lg" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/produtos/lingeries" className="text-lg" onClick={() => setIsOpen(false)}>Lingeries</a>
          <a href="/produtos/roupas-bebe" className="text-lg" onClick={() => setIsOpen(false)}>Roupas de Bebê</a>
          <a href="/produtos/sandalias" className="text-lg" onClick={() => setIsOpen(false)}>Sandálias</a>
          <a href="/produtos/bolsas" className="text-lg" onClick={() => setIsOpen(false)}>Bolsas</a>
        </nav>

        <div className="flex gap-5 items-center justify-center mt-5">
          <img className="h-6 w-6 cursor-pointer" src="/icons/heart.svg" alt="Favoritos" />
          <div className="relative cursor-pointer" onClick={() => setIsOpenCart(true)}>
            <img className="h-6 w-6" src="/icons/bag.svg" alt="Carrinho" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Menu lateral carrinho */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-90 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpenCart ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpenCart}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Carrinho</h2>
          <button onClick={() => setIsOpenCart(false)} aria-label="Fechar carrinho">
            <img className="h-8 w-8" src="/icons/close.svg" alt="Fechar" />
          </button>
        </div>

        <div className="p-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 mt-2">Carrinho vazio</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4 border-b pb-2">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 text-left">
                  <p className="font-semibold">{item.nome}</p>
                  <p className="text-gray-600">{item.preco}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </header>
  );
}
