import React from "react";
import SectionWrapper from "./section";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
  image?: string;
  children?: React.ReactNode;
};

const TwoColumnSection = ({ className, image, children }: Props) => {
  return (
    <SectionWrapper>
      <div className={cn("flex items-center gap-8 ", className)}>
        <div className="w-full">{children}</div>
        <div className="w-full">
          <Image
            src={image || "/placeholder.png"}
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TwoColumnSection;
