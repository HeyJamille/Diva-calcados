import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import Menu from '../components/menu';
import { useCart } from '../../context/cartContext'; 
import { lingeries } from '../data/lingeries';
import type { Lingeries } from '../types/products';

export default function LingeriesPages() {
  const [selectedItem, setSelectedItem] = useState<Lingeries | null>(null);
  const [cart, setCart] = useState<Lingeries[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const closeModal = () => setSelectedItem(null);

  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart(selectedItem);
      closeModal();
      }
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <article>
      <Menu />

      <section className="bg-white text-gray-800 min-h-screen px-6 py-10 md:px-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-4 md:mb-0">Lingeries</h2>
          <input
            className="p-2 bg-gray-200 text-md text-black w-full md:w-60 rounded-lg"
            type="text"
            placeholder="Pesquise aqui..."
          />
        </div>

        {/* Lista de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {lingeries.map((product: Lingeries) => (
            <div
              key={product.id}
              onClick={() => setSelectedItem(product)}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer"
              title={`Ver detalhes de ${product.nome}`}
            >
              <img src={product.imagemUrl} alt={product.nome} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-black truncate">{product.nome}</h4>
                <p className="text-gray-700">{product.preco}</p>
              </div>
            </div>
          ))}
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
                <h3 className="text-2xl font-bold mb-4">{selectedItem.nome}</h3>
                <p className="text-lg font-medium mb-2 text-gray-700">Preço: {selectedItem.preco}</p>

                <div className="mb-3">
                  <p className="font-semibold text-gray-800">Cores disponíveis:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedItem.cores.map((cor, index) => (
                      <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{cor}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">Tamanhos disponíveis:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedItem.tamanhos.map((tamanho, index) => (
                      <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tamanho}</span>
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
                  <button
                    onClick={() => toggleFavorite(selectedItem.id)}
                    className="flex items-center justify-center p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                  >
                    {favorites.includes(selectedItem.id) ? <FaHeart /> : <FaRegHeart />}
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

      <a className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition"
        href="https://wa.me/5585985595993" >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </a>
    </article>
  );
}
