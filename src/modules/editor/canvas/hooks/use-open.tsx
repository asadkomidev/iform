import { create } from "zustand";

type OpenState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useOpen = create<OpenState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
