import { create } from "zustand";

type State = {
  description: string;
  setDescription: (description: string) => void;
};

export const useDescription = create<State>((set) => ({
  description: "",
  setDescription: (description) => set({ description }),
}));
