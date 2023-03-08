import { create } from "zustand";
export const useCartStore = create((set) => ({
  cart: [],

  plusItem: (item) => {
    set((state) => {
      const cart = state.cart;
      const index = cart.findIndex((i) => i.id === item.id);
      if (index === -1) {
        cart.push({ ...item, quantity: 1 });
      } else {
        cart[index].quantity += 1;
      }
      return { cart: [...cart] };
    });
  },

  minusItem: (item) => {
    set((state) => {
      const cart = state.cart;
      const index = cart.findIndex((i) => i.id === item.id);
      if (index === -1) {
        cart.push({ ...item, quantity: 1 });
      } else {
        if (cart[index].quantity === 1) {
          cart.splice(index, 1);
        } else {
          cart[index].quantity -= 1;
        }
      }
      return { cart: [...cart] };
    });
  },

  removeItem: (item) => {
    set((state) => {
      const cart = state.cart;
      const index = cart.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      return { cart: [...cart] };
    });
  },

  addItemOnce: (item) => {
    set((state) => {
      const cart = state.cart;
      const index = cart.findIndex((i) => i.id === item.id);
      if (index === -1) {
        cart.push({ ...item, quantity: 1 });
      }
      return { cart: [...cart] };
    });
  },
}));
