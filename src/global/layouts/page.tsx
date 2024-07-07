import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  button?: React.ReactNode;
  title: string;
  description: string;
};

const PageLayout = ({
  children,
  className,
  button,
  title,
  description,
}: Props) => {
  return (
    <div className={cn("flex flex-col px-6 py-4 ", className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="">
          <h1 className="text-xl font-semibold ">{title}</h1>
          <p className="max-w-md text-muted-foreground text-sm">
            {description}
          </p>
        </div>
        <div className="">{button}</div>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
};

export default PageLayout;
