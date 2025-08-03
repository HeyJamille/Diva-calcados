interface CabecalhoProps {
  title: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const Cabecalho = ({
  title,
  searchTerm,
  setSearchTerm,
}: CabecalhoProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
      <h2 className="text-4xl font-bold text-black mb-4 md:mb-0">{title}</h2>
      <input
        className="p-2 bg-gray-200 text-md text-black w-full md:w-60 rounded-lg"
        type="text"
        placeholder="Pesquise aqui..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
