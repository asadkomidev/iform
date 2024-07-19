import { Button } from "@/components/ui/button";
import { FormElementType } from "@/types/elements/elements";

type Props = {
  element: FormElementType;
};

const CtrButtonOnDrag = ({ element }: Props) => {
  const { label, icon: Icon } = element.elementButton;

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-24">
      <Button size="icon" variant="outline" className=" shadow-none flex ">
        <Icon className="size-5 text-center" />
      </Button>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
};

export default CtrButtonOnDrag;
