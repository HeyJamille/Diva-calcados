export default function Menu() {
  return (
    <aside className="flex flex-row justify-between p-5 md:px-10">
      <h1 className="text-2xl font-semibold">LUXE</h1>

      <nav>
        <ul className="hidden md:flex flex-row gap-10 ">
          <li>
            <a className="text-lg">Home</a>
          </li>
          <li>
            <a className="text-lg">Produtos</a>
          </li>
          <li>
            <a className="text-lg">Sobre</a>
          </li>
          <li>
            <a className="text-lg">Contato</a>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex md:flex-row md:gap-5">
        <img className="h-6 w-6" src="/icons/user.svg" alt="Usuário" />
        <img className="h-6 w-6" src="/icons/heart.svg" alt="Favoritos" />
        <img className="h-6 w-6" src="/icons/bag.svg" alt="Carrinho" />
      </div>
      <img className="h-10 w-10 md:hidden" src="/icons/menu.svg" alt="Menu" />
    </aside>
  );
}
