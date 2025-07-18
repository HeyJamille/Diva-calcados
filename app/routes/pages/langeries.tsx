import React from 'react'
import { Link } from 'react-router-dom'

const lingeries = [
  { id: 6, nome: 'Conjunto Renda Preto', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 79,90' },
  { id: 7, nome: 'Body Transparente', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 89,90' },
  { id: 8, nome: 'Sutiã com Bojo', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 59,90' },
  { id: 9, nome: 'Conjunto Vermelho', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 99,90' },
  { id: 10, nome: 'Body Luxo', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 129,90' },
  { id: 11, nome: 'Conjunto Renda Preto', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 79,90' },
  { id: 12, nome: 'Body Transparente', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 89,90' },
  { id: 13, nome: 'Sutiã com Bojo', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 59,90' },
  { id: 14, nome: 'Conjunto Vermelho', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 99,90' },
  { id: 15, nome: 'Body Luxo', imagem: '/demonstrative/sandalia.jpg', preco: 'R$ 129,90' },
]

export default function LingeriePage() {
  return (
    <section className="bg-white text-gray-200 min-h-screen px-6 py-16 md:px-24">
      {/* Título + botão de navegação */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <h2 className="text-4xl font-bold text-black mb-4 md:mb-0">Lingeries</h2>
        <div className='flex gap-2 md:gap-5'>
          <input className="p-2 bg-gray-200 text-md text-black w-30 md:w-50 rounded-lg" type="text" placeholder='Pesquise aqui...' />

          <Link
          to="/produtos/sandalias"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Ver Sandálias
        </Link>
        </div>
        
      </div>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lingeries.map((item) => (
          <div key={item.id} className="bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={item.imagem} alt={item.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-black">{item.nome}</h4>
              <p className="text-gray-900">{item.preco}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
