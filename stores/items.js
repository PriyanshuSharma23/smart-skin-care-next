import { create } from "zustand";
import { diseaseCosmetics } from "../components/products/diseaseCosmetics";
import { concealerProducts } from "../components/products/concealer";

export const useItemStore = create((set) => ({
  items: {},

  // TODO: add calls to backend
  fetchItems: async (store) => {
    const result = {
      diseaseCosmetics: {
        name: "Disease Cosmetics",
        cosmetics: diseaseCosmetics,
      },
      concealerProducts: {
        name: "Concealer Products",
        cosmetics: concealerProducts,
      },
    };

    set((state) => ({ ...state, items: result }));
  },
}));
