// Components
import About from "./components/about";
import Contact from "./components/contact";
import ContentMain from "./components/content-main";
import Menu from "./components/menu";
import Sale from "./components/sale";

export default function Home() {
  return (
    <article>
      <Menu />
      <ContentMain />
      <About />
      <Sale />
      <Contact />
    </article>
  );
}
