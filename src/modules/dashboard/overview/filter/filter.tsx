import { DateFilter } from "./date-filter";
import { NormalFilter } from "./normal-filter";

export const Filters = () => {
  return (
    <div className="flex items-center gap-2 mt-4 w-full p-0">
      <div className=" w-full flex flex-col">
        <p className="text-xs text-muted-foreground">Filter</p>
        <NormalFilter />
      </div>
      <div className="w-full flex flex-col">
        <p className="text-xs text-muted-foreground">Period</p>
        <DateFilter />
      </div>
    </div>
  );
};
