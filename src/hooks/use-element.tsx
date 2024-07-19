"use client";

import { ElementContext } from "@/context/element-context";
import { useContext } from "react";

function useElement() {
  const context = useContext(ElementContext);

  if (!context) {
    throw new Error("useElement must be used within a DesignerContext");
  }

  return context;
}

export default useElement;
