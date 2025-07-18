import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="h-auto bg-black text-gray-200 px-6 py-16 md:px-24">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-4">Fale Conosco</h2>
        <p className="text-lg text-gray-400">
          Entre em contato direto com a nossa equipe pelas redes sociais.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Será um prazer falar com você!
        </p>

        <div className="flex flex-row justify-center gap-6">

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5511912345678" // Substitua pelo seu número
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full font-2xl transition text-lg"
          >
            <FaWhatsapp />
          </a>

          {/* Botão Instagram */}
          <a
            href="https://www.instagram.com/luxemoda" // Substitua pela sua @
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:brightness-110 text-white p-3 rounded-full font-2xl transition text-lg"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Endereço ou informação extra (opcional) */}
        <div className="mt-16 text-gray-400 text-sm">
          <p>Rua Exemplo, 123 – Fortaleza - CE</p>
          <p className="mt-1">E-mail: contato@luxemoda.com</p>
        </div>

      </div>
    </section>
  )
}
