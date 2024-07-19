"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {};

const Banner = (props: Props) => {
  const [hide, setHide] = useState(false);
  const onClose = () => {
    setHide(true);
  };
  return (
    <div
      className={cn(
        "pb-2 max-w-7xl mx-auto px-2 flex items-center justify-between",
        hide && "hidden mt-4"
      )}>
      <div className="">banner</div>
      <div className="flex items-center gap-4">
        <Button size="sm">Upgrade</Button>
        <X className="size-4 cursor-pointer" onClick={onClose} />
      </div>
    </div>
  );
};

export default Banner;
