import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Type
import { type ProdutoBase } from "../routes/types/products";

type CartContextType = {
  cart: ProdutoBase[];
  addToCart: (produto: ProdutoBase) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Inicializa o estado pegando do localStorage só uma vez
  const [cart, setCart] = useState<ProdutoBase[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Sempre que cart mudar, atualiza o localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (produto: ProdutoBase) => {
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
