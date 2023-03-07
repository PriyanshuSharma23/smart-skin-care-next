import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filters: {
    skinType: "White",
    disease: [],
  },
  diseases: ["Parkinson", "A.L.S", "Sclerosis", "Arthritis"],
  skinTypes: [
    "White",
    "Asian",
    "African American",
    "American Indian or Alaskan Native",
    "Native Hawaiian or Other Pacific Islander",
  ],
  setFilterSkinType: (skinType) =>
    set((state) => ({ filters: { ...state.filters, skinType } })),
  setFilterDiseases: (diseases) =>
    set((state) => ({ filters: { ...state.filters, disease: diseases } })),
  resetFilters: () =>
    set((_state) => ({ filters: { skinType: null, disease: [] } })),
  setFilters: (filters) => set((_state) => ({ filters })),

  setDiseases: (diseases) => set((state) => ({ ...state, diseases })),
  setSkinTypes: (skinTypes) => set((state) => ({ ...state, skinTypes })),
}));
