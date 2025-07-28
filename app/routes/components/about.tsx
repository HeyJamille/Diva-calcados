export default function About() {
  return (
    <section id="about" className="bg-black text-gray-200 py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Image */}
        <div className="max-w-96 group overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
          <img
            src="./demonstrative/sandalia.jpg"
            alt="Imagem sobre lingerie e sandálias"
            className="w-full h-auto object-cover aspect-[4/5] transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Olá! Eu sou <span className="font-semibold text-white">[Seu Nome]</span>, apaixonada por design, moda e experiências que inspiram.
            Com um olhar sensível aos detalhes, desenvolvo projetos que unem elegância, conforto e autenticidade.
          </p>
          <p className="text-lg leading-relaxed text-gray-400 mt-4">
            Este espaço foi criado para compartilhar minha visão através das lingeries e sandálias da coleção <span className="text-white italic">DIVA</span>.
            Cada peça é pensada para realçar sua beleza com sofisticação e atitude – seja nos momentos mais íntimos ou no seu dia a dia.
          </p>
          <p className="text-lg leading-relaxed text-gray-400 mt-4">
            Aqui, você encontra peças únicas que celebram sua essência. Explore, sinta-se confiante e viva o seu melhor estilo com a <span className="text-white">DIVA.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
