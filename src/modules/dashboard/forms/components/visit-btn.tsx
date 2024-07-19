"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function VisitButton({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const shareLink = `${window.location.origin}/form/${shareUrl}`;
  return (
    <Button
      className="w-24"
      variant="outline"
      size="sm"
      onClick={() => {
        window.open(shareLink, "_blank");
      }}>
      Visit
    </Button>
  );
}

export default VisitButton;
