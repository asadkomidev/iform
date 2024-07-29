import { cn } from "@/lib/utils";

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

function Layout({ className, children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased focus:scroll-auto dark",
        className
      )}>
      {children}
    </html>
  );
}
type MainProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

function Main({ className, children, id }: MainProps) {
  return (
    <main className={cn("p-2", className)} id={id}>
      {children}
    </main>
  );
}
type SectionProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

function Section({ className, children, id }: SectionProps) {
  return (
    <section className={cn("", className)} id={id}>
      {children}
    </section>
  );
}
type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

function Container({ className, children, id }: ContainerProps) {
  return (
    <div className={cn("", className)} id={id}>
      {children}
    </div>
  );
}
type SVGContainerProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tl?: boolean;
  tr?: boolean;
  bl?: boolean;
  br?: boolean;
};

function SVGContainer({
  className,
  children,
  id,
  tl = true,
  tr = true,
  bl = true,
  br = true,
}: SVGContainerProps) {
  return (
    <div
      className={cn(
        "border-[0.5px] border-primary/10 dark:border-primary/10 flex flex-col items-start w-full mx-auto p-4 relative h-full",
        className
      )}
      id={id}>
      {tl && (
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white/10 text-primary/50" />
      )}
      {bl && (
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white/10 text-primary/50" />
      )}
      {tr && (
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white/10 text-primary/50" />
      )}
      {br && (
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white/10 text-primary/50" />
      )}

      {children}
    </div>
  );
}

function Icon({ className, ...rest }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

export { Layout, Main, Section, Container, SVGContainer };
