"use client";

import useElement from "@/hooks/use-element";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/props-sheet";

import { Elements } from "../../core";
import { useOpen } from "../hooks/use-open";

type Props = {};

const PropsWidget = (props: Props) => {
  const { open, setOpen } = useOpen();
  const { selectedElement, setSelectedElement } = useElement();
  if (!selectedElement) return null;
  const PropertiesForm = Elements[selectedElement?.type].props;

  const onOpenChange = () => {
    setSelectedElement(null);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="px-4">
        <SheetHeader>
          <SheetTitle className="text-xs font-normal text-muted-foreground ">
            Properties
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <PropertiesForm element={selectedElement} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PropsWidget;
