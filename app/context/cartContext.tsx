import { createContext, useContext, useState, type ReactNode } from "react";

type Produto = {
  id: number;
  nome: string;
  imagem: string;
  preco: string;
  cores: string[];
  tamanhos: string[];
  corSelecionada?: string;
  tamanhoSelecionado?: string;
};

type CartContextType = {
  cart: Produto[];
  addToCart: (produto: Produto) => void;
  removeFromCart: (id: number) => void; // <- Adicione isso
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Produto[]>([]);

  const addToCart = (produto: Produto) => {
    setCart((prev) => [...prev, produto]);
  };

  const removeFromCart = (id: number) => {
    const removedItem = cart.find((item) => item.id === id);
    alert(`"${removedItem?.nome}" foi removido(a) do carrinho.`);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
}
