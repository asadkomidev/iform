import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className }: Props) => {
  return <div className={cn("py-20 lg:py-32", className)}>{children}</div>;
};

export default SectionWrapper;
