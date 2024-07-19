"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { updateFormAction } from "@/actions/form-actions";

import useElement from "@/hooks/use-element";

type Props = {
  id: number;
};

const SaveButton = ({ id }: Props) => {
  const { elements } = useElement();
  const [loading, startTransition] = useTransition();

  const onSave = async () => {
    try {
      const jsonElements = JSON.stringify(elements);

      await updateFormAction(id, jsonElements);
      toast.success("Form saved successfully");
    } catch (error) {
      toast.error("Failed to save form");
    }
  };

  return (
    <Button
      onClick={() => {
        startTransition(onSave);
      }}
      variant="outline"
      size="sm"
      className="flex items-center gap-2">
      <span className="">
        <Save className="size-3" />
      </span>
      <span className="hidden md:flex">Save</span>
    </Button>
  );
};

export default SaveButton;
