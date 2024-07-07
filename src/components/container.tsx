import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-5xl px-4 lg:px-0", className)}>
      {children}
    </div>
  );
}
