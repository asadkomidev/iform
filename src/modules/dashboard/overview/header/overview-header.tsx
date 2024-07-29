import React from "react";
import { Filters } from "../filter/filter";
import { Button } from "@/components/ui/button";
import { NormalFilter } from "./normal-filter";

type Props = {};

export default function OverviewHeader({}: Props) {
  return (
    <div className="flex items-center flex-col justify-between md:flex-row w-full gap-4 mb-6">
      {/* <div className="w-full md:w-1/4 flex items-center gap-4">
        <Button size="sm" className="w-full">
          Create Form
        </Button>
        <Button size="sm" className="w-full" variant="outline">
          Create with AI
        </Button>
      </div> */}
      <div className="w-full md:w-1/3 ml-auto">
        <NormalFilter />
      </div>
    </div>
  );
}
