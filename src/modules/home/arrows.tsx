"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

import ArrowPointer from "@/public/arrow.svg";
import ArrowPointer2 from "@/public/arrow2.svg";
import ImageComponent from "@/global/layouts/Image-component";

export const Cursor = () => (
  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
    <path
      d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
      fill="var(--sky-500)"
      stroke="var(--sky-400)"
      strokeWidth="1.5"
    />
  </svg>
);

export const AnimatedCursor: React.FC<{ className?: string; text: string }> = ({
  className,
  text,
}) => (
  <motion.div
    initial={{ translateX: "0", translateY: "0" }}
    animate={{ translateX: ["0", "20px", "0"], translateY: ["0", "40px", "0"] }}
    transition={{ duration: 4, repeat: Infinity, bounce: true }}
    className={"flex items-center gap-4"}>
    <div className={cn("w-fit text-xs px-2", className)}>
      <span className="border p-1 rounded-full px-2 bg-background">{text}</span>

      <ImageComponent
        darkImage={ArrowPointer2}
        lightImage={ArrowPointer}
        className="rotate-45 p-0 ml-8 -mt-4 "
        w={100}
        h={10}
        alt="arrow"
      />
    </div>
    <Cursor />
  </motion.div>
);
