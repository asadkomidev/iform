import { cn } from "@/lib/utils";

export const BrowserComponent: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ className, children }) => (
  <div className={cn("backdrop:blur-4 w-full  rounded-lg ", className)}>
    <div className="w-full h-8 rounded-t-lg flex justify-start items-center space-x-1.5 px-3 bg-muted/20 ">
      <span className="w-3 h-3 rounded-full bg-neutral-700"></span>
      <span className="w-3 h-3 rounded-full bg-neutral-700"></span>
      <span className="w-3 h-3 rounded-full bg-neutral-700"></span>
    </div>
    <div className="bg-transparent border-4 border-muted/20 w-full">
      <div className="">{children}</div>
    </div>
  </div>
);
