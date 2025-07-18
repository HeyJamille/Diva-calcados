import React from 'react'

const produtos = {
  sandalias: [
    { id: 1, nome: 'Sandália Elegante', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 99,90' },
    { id: 2, nome: 'Sandália Nude', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 89,90' },
    { id: 3, nome: 'Sandália Salto Fino', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 119,90' },
    { id: 4, nome: 'Sandália Fashion', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 109,90' },
    { id: 5, nome: 'Sandália Preta', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 95,00' },
  ],
  lingeries: [
    { id: 6, nome: 'Conjunto Renda Preto', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 79,90' },
    { id: 7, nome: 'Body Transparente', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 89,90' },
    { id: 8, nome: 'Sutiã com Bojo', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 59,90' },
    { id: 9, nome: 'Conjunto Vermelho', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 99,90' },
    { id: 10, nome: 'Body Luxo', imagem: './demonstrative/sandalia.jpg', preco: 'R$ 129,90' },
  ],
}

export default function Sale() {
  return (
    <section className="bg-white text-gray-200 min-h-screen px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-black mb-10 text-center">Promoções Especiais</h2>

      {/* Sandálias */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-black mb-6">Sandálias em Oferta</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {produtos.sandalias.map((item) => (
            <div key={item.id} className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={item.imagem} alt={item.nome} className="text-black w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-black">{item.nome}</h4>
                <p className="text-gray-900">{item.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lingeries */}
      <div>
        <h3 className="text-2xl font-semibold text-black mb-6">Lingeries em Oferta</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {produtos.lingeries.map((item) => (
            <div key={item.id} className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={item.imagem} alt={item.nome} className="text-black w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-black">{item.nome}</h4>
                <p className="text-gray-900">{item.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
