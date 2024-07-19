"use client";

import { ElementInstance } from "@/types/elements/instances";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ElementContextType = {
  elements: ElementInstance[];
  setElements: Dispatch<SetStateAction<ElementInstance[]>>;
  addElement: (index: number, element: ElementInstance) => void;
  removeElement: (id: string) => void;

  selectedElement: ElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<ElementInstance | null>>;

  updateElement: (id: string, element: ElementInstance) => void;
};

export const ElementContext = createContext<ElementContextType | null>(null);

export default function ElementContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<ElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<ElementInstance | null>(null);

  const addElement = (index: number, element: ElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const updateElement = (id: string, element: ElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <ElementContext.Provider
      value={{
        elements,
        setElements,
        addElement,
        removeElement,

        selectedElement,
        setSelectedElement,

        updateElement,
      }}>
      {children}
    </ElementContext.Provider>
  );
}
