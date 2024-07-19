import { create } from "zustand";

type State = {
  title: string;
  setTitle: (title: string) => void;
};

export const useTitle = create<State>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
}));
