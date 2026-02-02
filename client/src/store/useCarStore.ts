import { create } from 'zustand';

interface CarState {
  model: string;
  hasSpoiler: boolean;
  hasHood: boolean;
  setModel: (model: string) => void;
  toggleSpoiler: () => void;
  toggleHood: () => void;
}

export const useCarStore = create<CarState>((set) => ({
  model: 'Honda City',
  hasSpoiler: false,
  hasHood: false,
  setModel: (model) => set({ model }),
  toggleSpoiler: () => set((state) => ({ hasSpoiler: !state.hasSpoiler })),
  toggleHood: () => set((state) => ({ hasHood: !state.hasHood })),
}));
