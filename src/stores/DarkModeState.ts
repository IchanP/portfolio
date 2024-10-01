import { create } from "zustand";

interface DarkmodeStore {
  isDarkMode: boolean;
  setIsDarkmode: (darkModeState: boolean) => void;
}

export const useIsDarkmode = create<DarkmodeStore>((set) => ({
  isDarkMode: false,
  setIsDarkmode: (darkModeState: boolean) => set({ isDarkMode: darkModeState }),
}));
