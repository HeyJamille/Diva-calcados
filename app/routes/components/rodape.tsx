import { useMemo } from "react";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

export default function Rodape() {
  // message
  const mensagem = useMemo(() => {
    const mensagem = `
Olá! 👋

Tenho interesse em saber mais sobre os produtos que vocês oferecem. 
Poderia me passar mais informações?`;

    const url = `https://wa.me/5585985595993?text=${encodeURIComponent(
      mensagem
    )}`;
    return url;
  }, []);

  return (
    <section
      id="contact"
      className="h-auto bg-black text-gray-200 px-6 py-16 md:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Fale Conosco</h2>
        <p className="text-lg text-gray-400">
          Entre em contato direto com a nossa equipe pelas redes sociais.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Será um prazer falar com você!
        </p>

        <div className="flex flex-row justify-center gap-6">
          {/* Botão Telefone */}
          <a
            href="tel:+5585991676691"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:brightness-110 text-white p-3 rounded-full font-2xl transition text-lg"
          >
            <FaPhone />
          </a>

          {/* Botão WhatsApp */}
          <a
            href={mensagem} // Substitua pelo seu número
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full font-2xl transition text-lg"
          >
            <FaWhatsapp />
          </a>

          {/* Botão Instagram */}
          <a
            href="https://www.instagram.com/antoniiacarmo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:brightness-110 text-white p-3 rounded-full font-2xl transition text-lg"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Endereço ou informação extra (opcional) */}
        <div className="mt-16 text-gray-400 text-sm">
          <p className="mt-1">E-mail: antoniiacarmo@gmail.com</p>
          <p>Fortaleza - CE</p>
        </div>
      </div>
    </section>
  );
}
