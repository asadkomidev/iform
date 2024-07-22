"use client";

import { ElementInstance } from "@/types/elements/instances";
import { cn } from "@/lib/utils";

import { Elements } from "../../core";

type Props = {
  top: boolean | undefined;
  bottom: boolean | undefined;
  element: ElementInstance;
  mouseIsOver: boolean | undefined;
};

const ElementToDrop = ({ top, bottom, element, mouseIsOver }: Props) => {
  const Element = Elements[element.type].element;
  return (
    <>
      {top && (
        <div className="absolute top-0 w-full rounded-md h-[3px] bg-primary rounded-b-none" />
      )}
      <div
        className={cn(
          "flex w-full min-h-[120px] items-center rounded-lg  px-4 py-2 pointer-events-none opacity-100 bg-background border translate-all transition ease-in-out duration-400 ",
          mouseIsOver && "opacity-100 border-l-primary "
        )}>
        <Element element={element} />
      </div>
      {bottom && (
        <div className="absolute bottom-0 w-full rounded-md h-[3px] bg-primary rounded-t-none" />
      )}
    </>
  );
};

export default ElementToDrop;
