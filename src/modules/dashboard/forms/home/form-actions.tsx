"use client";

import { deleteFormAction } from "@/actions/form-actions";
import { FormType } from "@/backend/database/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfirm } from "@/hooks/use-confirm";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  data: FormType;
};

export default function FormActions({ data }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this broker."
  );

  const handleDelete = async () => {
    const ok = await confirm();
    if (ok) {
      const response = await deleteFormAction(data.id);
      if (response) {
        toast.success("Form deleted successfully");
      } else {
        toast.error("Failed to delete form");
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <EllipsisVertical className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mr-4">
          <DropdownMenuItem onClick={() => router.push(`/editor/${data.id}`)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/forms/${data.id}`)}>
            Result
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
