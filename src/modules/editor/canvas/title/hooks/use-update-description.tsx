"use client";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { FormType } from "@/backend/database/types";
import { updateDescriptionAction } from "@/actions/form-actions";
import { useDescription } from "../states/use-description";

export const useUpdateDescription = (form: FormType) => {
  const [isEditing, setIsEditing] = useState(false);
  const { setDescription } = useDescription();

  const onUpdateDescription = async (value: string) => {
    let response: FormType;
    try {
      setIsEditing(true);
      if (value.trim() === "") {
        response = await updateDescriptionAction(form.id, "Form description");
      } else {
        response = await updateDescriptionAction(form.id, value);
      }
      const promise = new Promise((resolve) =>
        setTimeout(() => resolve(response), 500)
      );

      if (response) {
        setDescription(value);
        toast.promise(promise, {
          loading: (
            <div className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              <span className="">Saving...</span>
            </div>
          ),
          success: "Saved",
          error: "Failed to update form description",
          position: "top-center",
          invert: true,

          style: {
            width: "50%",
            height: "40px",
            borderRadius: "8px",
            display: "flex",
            marginLeft: "25%",
            alignSelf: "center",
          },
        });
      }
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update form description");
    }
  };

  return {
    onUpdateDescription,
    setDescription,
  };
};
