import { create } from "zustand";

const useBear = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}));

export const useChamp = create((set) => ({
    champ: "",
    updateChamp: (newChamp) => set({ champ: newChamp }),
}));

export const useLoLLine = create((set) => ({
    champions: [],
    updateChampions: (newChampion) =>
        set((state) => ({ champions: [...state.champions, newChampion] })),
}));
