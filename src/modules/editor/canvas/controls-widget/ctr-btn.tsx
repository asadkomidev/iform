"use client";

import { useDraggable } from "@dnd-kit/core";
import { cn, idGenerator } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FormElementType } from "@/types/elements/elements";
import useElement from "@/hooks/use-element";

type Props = {
  element: FormElementType;
};

const CtrButton = ({ element }: Props) => {
  const { label, icon: Icon } = element.elementButton;
  const { addElement, elements } = useElement();

  const draggable = useDraggable({
    id: `ctr-btn-${element.type}`,
    data: {
      type: element.type,
      isDesignerBtnElement: true,
    },
  });

  const onClick = () => {
    const newElement = element.construct(idGenerator());
    addElement(elements.length, newElement);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            ref={draggable.setNodeRef}
            {...draggable.listeners}
            {...draggable.attributes}
            onClick={onClick}
            size="icon"
            variant="outline"
            className={cn(
              "border-none shadow-none ",
              draggable.isDragging && "ring-1 ring-primary"
            )}>
            <Icon className="size-5 text-center cursor-grab" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="ml-2">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CtrButton;
