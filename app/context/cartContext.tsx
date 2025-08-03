import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Type
import {
  type ProdutoBase,
  type ProdutoCarrinho,
} from "../routes/types/products";

type CartContextType = {
  cart: ProdutoCarrinho[];
  addToCart: (produto: ProdutoCarrinho) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Initializes the state by taking it from localStorage only once
  const [cart, setCart] = useState<ProdutoCarrinho[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [notification, setNotification] = useState<string | null>(null);

  // update localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (produto: ProdutoCarrinho) => {
    setCart((prev) => [...prev, produto]);
  };

  const removeFromCart = (id: number) => {
    const removedItem = cart.find((item) => item.id === id);
    if (removedItem) {
      setNotification(`"${removedItem.nome}" foi removido(a) do carrinho.`);
      setTimeout(() => setNotification(null), 3000); // esconde após 3s
    }
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
