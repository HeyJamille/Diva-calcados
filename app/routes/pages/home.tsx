// Components
import { CartProvider } from "~/context/cartContext";
import About from "../components/about";
import Contact from "../components/contact";
import ContentMain from "../components/content-main";
import Menu from "../components/menu";
import Sale from "../components/sale";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <article>
      <Menu />
      <ContentMain />
      <About />
      <Sale />
      <Contact />

      <a className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition"
        href="https://wa.me/5511912345678" >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </a>
    </article>
  );
}
