import { createContext, useContext, useState, type ReactNode } from 'react';

type Produto = {
  id: number;
  nome: string;
  imagem: string;
  preco: string;
  cores: string[];
  tamanhos: string[];
};

type CartContextType = {
  cart: Produto[];
  addToCart: (produto: Produto) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Produto[]>([]);

  const addToCart = (produto: Produto) => {
    setCart((prev) => [...prev, produto]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
}
