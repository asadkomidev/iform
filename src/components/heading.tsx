import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  heading?: string;
  description?: string;
};

const Heading = ({
  children,
  className,
  label,
  heading,
  description,
}: Props) => {
  return (
    <div className={cn("flex flex-col gap-6  max-w-xl", className)}>
      <div className="">
        {label && (
          <Badge variant="secondary" className="mb-2">
            {label}
          </Badge>
        )}
        <h1 className="text-3xl lg:text-5xl">{heading}</h1>
      </div>
      <div className="">
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-4 pt-6">{children}</div>
    </div>
  );
};

export default Heading;
