import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

export default function ImageSkelton({}: Props) {
  return <Skeleton className="h-full w-full"></Skeleton>;
}
