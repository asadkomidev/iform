import SectionWrapper from "./section";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const GridSection = ({ className, children }: Props) => {
  return (
    <SectionWrapper>
      <div className={cn("grid grid-col", className)}>{children}</div>
    </SectionWrapper>
  );
};

export default GridSection;
