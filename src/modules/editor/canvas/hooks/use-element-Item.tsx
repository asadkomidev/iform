"use client";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import useElement from "@/hooks/use-element";

type Props = {
  element: ElementInstance;
};

export const useElementItem = ({ element }: Props) => {
  const { removeElement, selectedElement, setSelectedElement } = useElement();
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });

  if (draggable.isDragging) return null;

  return {
    removeElement,
    selectedElement,
    setSelectedElement,
    mouseIsOver,
    topHalf,
    bottomHalf,
    draggable,

    setMouseIsOver,
  };
};
