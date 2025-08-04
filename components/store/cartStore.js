// components/store/cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  // Cart
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cartItems.find((item) => item.id === product.id);
      if (exists) return state;
      return { cartItems: [...state.cartItems, product] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),

  // Orders
  orderHistory: [],
  addOrder: (order) =>
    set((state) => {
      const updated = [...state.orderHistory, order];
      localStorage.setItem("orders", JSON.stringify(updated));
      return { orderHistory: updated };
    }),

  loadOrdersFromStorage: () => {
    const saved = JSON.parse(localStorage.getItem("orders") || "[]");
    set({ orderHistory: saved });
  },
}));

export default useCartStore;
