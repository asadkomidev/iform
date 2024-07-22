"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  url: string;
};

export default function VisitButton({ url }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const visitUrl = `${window.location.origin}/form/${url}`;
  return (
    <Button
      className="w-24"
      variant="outline"
      size="sm"
      onClick={() => {
        window.open(visitUrl, "_blank");
      }}>
      Visit
    </Button>
  );
}
