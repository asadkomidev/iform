import { Elements } from "../../core";
import CtrButton from "./ctr-btn";

type Props = {};

const ControlsWidget = (props: Props) => {
  return (
    <>
      <p className="text-xs mt-6 text-muted-foreground hidden md:block">
        Controls
      </p>
      <div className="mt-2 flex md:flex-col gap-1  items-center justify-between border rounded-lg p-1 bg-background">
        <p className="text-xs pl-4 text-muted-foreground md:hidden">Controls</p>
        <div className=" flex md:flex-col gap-1  items-center justify-center">
          <CtrButton element={Elements.Heading} />
          <CtrButton element={Elements.SubHeading} />
          <CtrButton element={Elements.Paragraph} />
          <CtrButton element={Elements.Separator} />
          <CtrButton element={Elements.Space} />
        </div>
      </div>
    </>
  );
};

export default ControlsWidget;
