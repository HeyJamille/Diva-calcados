import { useMemo } from "react";

// Context
import { CartProvider } from "~/context/cartContext";

// Icons
import { FaWhatsapp } from "react-icons/fa";

// Components
import Menu from "../components/menu";
import Sale from "../components/sale";
import Rodape from "../components/rodape";
import About from "../components/about";
import ContentMain from "../components/content-main";

export default function Home() {
  // Message
  const mensagem = useMemo(() => {
    const texto = `Olá! 👋

Tenho interesse em saber mais sobre os produtos que vocês oferecem.
Poderia me passar mais informações?`;

    const url = `https://wa.me/5585985595993?text=${encodeURIComponent(texto)}`;
    return url;
  }, []);

  return (
    <article>
      <Menu />
      <section className="mt-20">
        <ContentMain />
        <About />
        <Sale />
        <Rodape />

        <a
          className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition"
          href={mensagem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="h-8 w-8 text-white" />
        </a>
      </section>
    </article>
  );
}
