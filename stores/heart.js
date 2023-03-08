import { create } from "zustand";

export const useHeartStore = create((set) => ({
  heartedItems: [],
  toggleHeart: (item) => {
    set((state) => {
      const heartedItems = state.heartedItems;
      const index = heartedItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        heartedItems.push(item);
      } else {
        heartedItems.splice(index, 1);
      }
      return { heartedItems };
    });
  },
}));
