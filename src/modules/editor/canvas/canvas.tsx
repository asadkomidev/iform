"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { FormType } from "@/backend/database/types";
import useElement from "@/hooks/use-element";

import DropArea from "./drop-area/drop-area";
import PropsWidget from "./props-widget/props-widget";
import FieldsWidget from "./fields-widget/fields-widget";
import ControlsWidget from "./controls-widget/controls-widget";
import ElementDragWrapper from "./drop-area/element-drag-wrapper";

import Title from "./title/title";

type Props = {
  form: FormType;
};

const Canvas = ({ form }: Props) => {
  const { setElements, setSelectedElement } = useElement();
  const [isReady, setIsReady] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    const elements = JSON.parse(form.content || "[]");
    setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [form, setElements, isReady, setSelectedElement]);

  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Loader2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  return (
    <DndContext sensors={sensors}>
      <div className="p-4 relative h-[calc(100vh-100px)] overflow-hidden ">
        <div className="flex flex-col md:absolute md:left-4 z-30 pb-8 md:pb-0">
          <ControlsWidget />
          <FieldsWidget />
        </div>

        <div className="flex flex-col md:absolute md:right-4 z-30 pb-8 md:pb-0">
          <PropsWidget />
        </div>
        <div className="  h-[calc(100vh-140px)]  overflow-y-scroll no-scrollbar">
          <Title form={form} />
          <DropArea form={form} />
        </div>
      </div>
      <ElementDragWrapper />
    </DndContext>
  );
};

export default Canvas;
