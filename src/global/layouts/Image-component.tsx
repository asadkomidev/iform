"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import ImageSkelton from "@/modules/home/showcase/skeltons/image-skelton";
import Placeholder from "@/public/placeholder.png";

type Props = {
  darkImage: string;
  lightImage: string;
  className?: string;
  w?: number;
  h?: number;
  alt?: string;
};

export default function ImageComponent({
  darkImage,
  lightImage,
  className,
  w = 500,
  h = 500,
  alt,
}: Props) {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = lightImage;
      break;
    case "dark":
      src = darkImage;
      break;
    default:
      src = darkImage;
      break;
  }

  return (
    <Suspense fallback={<ImageSkelton />}>
      <Image
        src={src}
        width={w}
        height={h}
        alt={alt || "image"}
        className={cn("", className)}
        style={{
          maskImage: `linear-gradient(to top, transparent, black 100%)`,
        }}
      />
    </Suspense>
  );
}
