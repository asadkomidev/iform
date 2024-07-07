import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className="">
      <Link href="/dashboard" className={cn("flex items-center", className)}>
        <span className="text-2xl font-semibold">Acme.</span>
      </Link>
    </div>
  );
};

export default Logo;
