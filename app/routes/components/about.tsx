export default function About() {
  return (
    <section id="about" className="bg-black text-gray-200 py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* Image */}
        <div className="max-w-96 group overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
          <img
            src="./rosa.jpg"
            alt="Imagem sobre lingerie e sandálias"
            className="w-full h-auto object-cover aspect-[4/5] transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre a DIVA</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            A <span className="font-semibold text-white">DIVA</span> é uma marca
            apaixonada por oferecer calçados, lingeries, bolsas e roupas de bebê
            que unem qualidade, conforto e estilo em cada detalhe. Nosso
            compromisso é proporcionar produtos que valorizam a sua
            personalidade, trazendo sofisticação e bem-estar para o seu dia a
            dia, seja para você, sua família ou quem você ama.
          </p>
          <br></br>
          <p className="text-lg leading-relaxed text-gray-300">
            Cada peça da DIVA é cuidadosamente selecionada e criada para atender
            às necessidades de quem busca elegância e praticidade, com design
            pensado para realçar sua essência e confiança. Seja para momentos
            especiais ou para o cotidiano, nossas coleções são feitas para
            acompanhar você com conforto e atitude.
          </p>
          <br></br>
          <p className="text-lg leading-relaxed text-gray-300">
            Aqui, você encontra produtos únicos que celebram a diversidade e
            autenticidade de cada pessoa. Explore nossa coleção, sinta-se
            inspirada e viva seu melhor estilo com a{" "}
            <span className="text-white font-semibold">DIVA</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
