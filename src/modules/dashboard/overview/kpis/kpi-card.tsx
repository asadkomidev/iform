"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  value: string;
  label: string;
  icon: IconType;
};

export default function KpiCard({ title, value, label, icon: Icon }: Props) {
  return (
    <Card className="shadow-none ">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-1  h-6 w-6 rounded-full flex items-center justify-center">
            <Icon className="size-3 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <Label className=" text-muted-foreground">{title}</Label>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-16">
        <span className="text-2xl font-bold flex items-center">{value}</span>
      </CardContent>
      <CardFooter className="whitespace-nowrap">
        <span className="text-xs text-muted-foreground">{label}</span>
      </CardFooter>
    </Card>
  );
}
