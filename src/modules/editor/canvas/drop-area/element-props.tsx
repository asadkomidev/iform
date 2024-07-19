import { Button } from "@/components/ui/button";
import { Edit, Grip, Trash } from "lucide-react";

type Props = {
  removeElement: (id: string) => void;
  id: string;
};

const ElementProps = ({ removeElement, id }: Props) => {
  return (
    <>
      <div className="absolute right-0 h-full bg-background translate-all transition ease-in-out duration-300">
        <Button
          className="flex justify-center absolute top-2 right-2  rounded-md  hover:text-red-500 translate-all transition ease-in-out duration-400"
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            removeElement(id);
          }}>
          <Trash className="size-4" />
        </Button>
      </div>
      <div className="absolute right-4 bottom-2  translate-all transition ease-in-out duration-400">
        <div className="text-[10px] flex items-center gap-1 text-muted-foreground">
          Click to <Edit className="size-2.5" />
          <kbd className="italic text-primary"> Edit</kbd> or{" "}
          <Grip className="size-2.5" />
          <kbd className="italic text-primary">Drag</kbd> to move
        </div>
      </div>
    </>
  );
};

export default ElementProps;
