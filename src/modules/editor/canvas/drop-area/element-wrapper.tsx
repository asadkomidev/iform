import { ElementInstance } from "@/types/elements/instances";

import ElementProps from "./element-props";
import { useOpen } from "../hooks/use-open";
import { useElementItem } from "../hooks/use-element-Item";
import ElementToDrop from "./element-to-drop";

type Props = {
  element: ElementInstance;
};

const ElementWrapper = ({ element }: Props) => {
  const { open, setOpen } = useOpen();
  const data = useElementItem({ element });

  const onOpenChange = (e: any) => {
    e.stopPropagation();
    setOpen(true);
    data?.setSelectedElement(element);
  };

  return (
    <div
      ref={data?.draggable?.setNodeRef}
      {...data?.draggable.listeners}
      {...data?.draggable.attributes}
      className="relative min-h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset"
      onMouseEnter={() => {
        data?.setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        data?.setMouseIsOver(false);
      }}
      onClick={(e) => {
        onOpenChange(e);
      }}>
      <div
        ref={data?.topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t-md"
      />
      <div
        ref={data?.bottomHalf.setNodeRef}
        className="absolute  w-full bottom-0 h-1/2 rounded-b-md"
      />

      {data?.mouseIsOver && (
        <ElementProps removeElement={data?.removeElement} id={element.id} />
      )}
      <ElementToDrop
        element={element}
        mouseIsOver={data?.mouseIsOver}
        top={data?.topHalf.isOver}
        bottom={data?.bottomHalf.isOver}
      />
    </div>
  );
};

export default ElementWrapper;
