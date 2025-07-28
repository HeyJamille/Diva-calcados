import React from 'react'

const produtos = {
  sandalias: [
    { id: 1, nome: 'Sandália 01', imagem: './products/sandalias/sandalia01.jpeg', preco: 'Negociável' },
    { id: 2, nome: 'Sandália 02', imagem: './products/sandalias/sandalia02.jpeg', preco: 'Negociável' },
    { id: 3, nome: 'Sandália 03', imagem: './products/sandalias/sandalia03.jpeg', preco: 'Negociável' },
    { id: 4, nome: 'Sandália 04', imagem: './products/sandalias/sandalia04.jpeg', preco: 'Negociável' },
    { id: 5, nome: 'Sandália 05', imagem: './products/sandalias/sandalia05.jpeg', preco: 'Negociável' },
  ],
  lingeries: [
    { id: 6, nome: 'Lingerie 01', imagem: './products/lingeries/lingerie01.jpeg', preco: 'Negociável' },
    { id: 7, nome: 'Lingerie 02', imagem: './products/lingeries/lingerie02.jpeg', preco: 'Negociável' },
    { id: 8, nome: 'Lingerie 03', imagem: './products/lingeries/lingerie03.jpeg', preco: 'Negociável' },
    { id: 9, nome: 'Lingerie 04', imagem: './products/lingeries/lingerie04.jpeg', preco: 'Negociável' },
    { id: 10, nome: 'Lingerie 05', imagem: './products/lingeries/lingerie05.jpeg', preco: 'Negociável' },
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
