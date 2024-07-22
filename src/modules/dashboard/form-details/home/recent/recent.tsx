"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RecentSubmissionsType } from "@/types/response/form";
import { formatDistance } from "date-fns";
import React from "react";
import RecentCard from "./recent-card";

type Props = {
  data: RecentSubmissionsType[];
};

const Recent = ({ data }: Props) => {
  return (
    <Card className="h-full shadow-none">
      <CardHeader className="items-start pb-0">
        <CardTitle>Recent submissions</CardTitle>
        <CardDescription>
          The most recent submissions to this form
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full min-h-[324px]">
        <div className="flex items-center justify-between py-4 mt-4">
          <Label className="w-full">ID</Label>
          <Label className="w-full text-end">Submitted at</Label>
        </div>
        {data.map((submission, index) => (
          <RecentCard key={index} data={submission} />
        ))}
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm items-start">
        Showing 10 most recent submissions
      </CardFooter>
    </Card>
  );
};

export default Recent;
