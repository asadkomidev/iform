"use client";

import { useState } from "react";
import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";

import FieldButtonOnDrag from "@/modules/editor/canvas/fields-widget/field-btn-on-drag";
import { ElementType } from "@/types/elements/elements";
import useElement from "@/hooks/use-element";

import { Elements } from "../../core";

type Props = {};

const ElementDragWrapper = (props: Props) => {
  const { elements } = useElement();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementType;

    node = <FieldButtonOnDrag element={Elements[type]} />;
  }

  const isDesignerElement = draggedItem.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const Element = Elements[element.type].element;
      node = (
        <div className="flex bg-background border rounded-md min-h-[120px] w-full py-2 px-4 opacity-60 pointer pointer-events-none">
          <Element element={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
};

export default ElementDragWrapper;
