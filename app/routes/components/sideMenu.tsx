interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const SideMenu = ({ isOpen, setIsOpen }: SideMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-xl font-semibold">DIVA</h2>
        <button onClick={() => setIsOpen(false)} aria-label="Fechar menu">
          <img className="h-8 w-8" src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>

      <nav className="flex flex-col p-4 gap-5">
        <a href="/" className="text-lg" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a
          href="/produtos/lingeries"
          className="text-lg"
          onClick={() => setIsOpen(false)}
        >
          Lingeries
        </a>
        <a
          href="/produtos/roupas-bebe"
          className="text-lg"
          onClick={() => setIsOpen(false)}
        >
          Roupas de Bebê
        </a>
        <a
          href="/produtos/sandalias"
          className="text-lg"
          onClick={() => setIsOpen(false)}
        >
          Sandálias
        </a>
        <a
          href="/produtos/bolsas"
          className="text-lg"
          onClick={() => setIsOpen(false)}
        >
          Bolsas
        </a>
      </nav>
    </div>
  );
};
