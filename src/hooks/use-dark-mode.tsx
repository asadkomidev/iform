import { create } from "zustand";

type State = {
  isDark: boolean;
  setDarkMode: (isDark: boolean) => void;
};

export const useDarkMode = create<State>((set) => ({
  isDark: false,
  setDarkMode: (isDark) => set({ isDark }),
}));
