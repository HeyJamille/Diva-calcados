export default function ContentMain() {
  return (
    <article className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-12 px-6 py-16 md:px-20 bg-gradient-to-b from-white to-gray-50">
      {/* Texto */}
      <section className="flex flex-col gap-8 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold md:leading-tight text-gray-900">
          Realce sua essência<br className="hidden md:block" /> com sofisticação
        </h1>

        <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
          <p>
            Na <span className="font-semibold text-gray-900">LUXE</span>, cada detalhe é pensado para revelar o que há de mais autêntico em você — com elegância, conforto e atitude.
          </p>
          <p>
            Vista-se de confiança. Viva sua beleza do seu jeito.
          </p>
        </div>

        <button className="self-center md:self-start px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300">
          Conheça a coleção
        </button>
      </section>

      {/* Imagem com estilo refinado */}
      <section className="max-w-96">
        <div className="group overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
          <img
            src="/demonstrative/sandalia.jpg"
            alt="Sandália de luxo"
            className="w-full h-auto object-cover aspect-[4/5] transition duration-500 group-hover:scale-105"
          />
        </div>
      </section>
    </article>
  );
}
