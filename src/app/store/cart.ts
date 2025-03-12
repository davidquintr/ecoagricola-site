import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  productSlug: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (productSlug: string, quantity: number) => void;
  removeFromCart: (productSlug: string) => void;
  clearCart: () => void;
  setProductQuantity: (productSlug: string, quantity: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (productSlug, quantity) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.productSlug === productSlug);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.productSlug === productSlug ? { ...item, quantity: item.quantity + quantity } : item
              ),
            };
          }
          return { cart: [...state.cart, { productSlug, quantity }] };
        }),
      removeFromCart: (productSlug) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.productSlug !== productSlug),
        })),
      clearCart: () => set({ cart: [] }),
      setProductQuantity: (productSlug, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.productSlug === productSlug ? { ...item, quantity } : item
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);
