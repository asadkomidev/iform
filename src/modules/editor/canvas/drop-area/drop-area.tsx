"use client";

import { cn } from "@/lib/utils";

import { useDroppable } from "@dnd-kit/core";
import { useOpen } from "../hooks/use-open";
import { FormType } from "@/backend/database/types";
import ElementWrapper from "./element-wrapper";
import { useElementDrag } from "../hooks/use-element-drag";
import useElement from "@/hooks/use-element";
import { animate, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

type Props = {
  form: FormType;
};

const DropArea = ({ form }: Props) => {
  const { open, setOpen } = useOpen();
  const { elements, addElement, removeElement } = useElement();

  // const [scope, animate] = useAnimate();

  const droppable = useDroppable({
    id: "main-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  // useEffect(() => {
  //   if (open) {
  //     const slideAnimation = async () => {
  //       await animate(scope.current, {
  //         x: 0,
  //         transition: {
  //           duration: 0.3,
  //         },
  //       });
  //     };

  //     slideAnimation();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [open]);

  useElementDrag({
    elements,
    addElement,
    removeElement,
  });

  return (
    <>
      <div
        ref={droppable.setNodeRef}
        className={cn(
          "mb-10 mt-4 rounded-lg flex flex-col min-h-[50vh] md:min-h-[65vh] transition ease-in-out  p-1 ",
          droppable.isOver && "ring-1 ring-primary ring-inset",
          open ? "md:ml-28 md:max-w-2xl " : "max-w-3xl mx-auto"
        )}>
        <div
          // layout
          // ref={scope}
          className=" min-h-[50vh] md:min-h-[65vh]">
          {!droppable.isOver && elements.length === 0 && (
            <div className="flex items-center justify-center w-full min-h-[50vh] ">
              <p className="text-muted-foreground text-sm">Drop element here</p>
            </div>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="p-2 w-full">
              <div className="h-[120px] rounded-md bg-background"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col  w-full gap-2 py-2 mb-32">
              {elements.map((element) => (
                <ElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropArea;
