import FieldButton from "./field-btn";
import { Elements } from "../../core";

type Props = {};

const FieldsWidget = (props: Props) => {
  return (
    <>
      <p className="text-xs mt-6 text-muted-foreground hidden md:block">
        Fields
      </p>
      <div className="mt-2 flex md:flex-col gap-1  items-center justify-between border rounded-lg p-1 bg-background">
        <p className="text-xs pl-4 text-muted-foreground md:hidden">Fields</p>
        <div className=" flex md:flex-col gap-1  items-center justify-center overflow-x-scroll">
          <FieldButton element={Elements.ShortAnswer} />
          <FieldButton element={Elements.LongAnswer} />
          <FieldButton element={Elements.NumberAnswer} />
          <FieldButton element={Elements.DateAnswer} />
          <FieldButton element={Elements.SelectAnswer} />
          <FieldButton element={Elements.CheckboxAnswer} />
          <FieldButton element={Elements.RadioAnswer} />
          <FieldButton element={Elements.MultipleAnswer} />
        </div>
      </div>
    </>
  );
};

export default FieldsWidget;
