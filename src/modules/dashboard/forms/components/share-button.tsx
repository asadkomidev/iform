"use client";

import { useEffect, useState } from "react";
import { Share } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

function ShareButton({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const shareLink = `${window.location.origin}/form/${shareUrl}`;
  return (
    <div className="flex flex-grow gap-4 items-center">
      <Button
        className="flex items-center gap-2"
        size="sm"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast.success("Link copied to clipboard");
        }}>
        <Share className="size-3" />
        <span className="hidden md:flex">Share</span>
      </Button>
    </div>
  );
}

export default ShareButton;
