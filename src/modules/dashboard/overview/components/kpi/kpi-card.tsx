"use client";

import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Props = {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
};

const KpiCard = ({
  title,
  value,
  description,
  icon,
  className,
  loading,
}: Props) => {
  return (
    <Card className="shadow-sm rounded-lg">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-4xl">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{description}</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
};

export default KpiCard;
