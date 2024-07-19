"use client";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { FormType } from "@/backend/database/types";
import { updateTitleAction } from "@/actions/form-actions";
import { useTitle } from "../states/use-title";

export const useUpdateTitle = (form: FormType) => {
  const [isEditing, setIsEditing] = useState(false);

  const { setTitle } = useTitle();

  const onUpdateTitle = async (value: string) => {
    let response: FormType;
    try {
      setIsEditing(true);
      if (value.trim() === "") {
        response = await updateTitleAction(form.id, "Untitled form");
      } else {
        response = await updateTitleAction(form.id, value);
      }
      const promise = new Promise((resolve) =>
        setTimeout(() => resolve(response), 500)
      );

      if (response) {
        setTitle(response.title);
        toast.promise(promise, {
          loading: (
            <div className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              <span className="">Saving...</span>
            </div>
          ),
          success: "Saved",
          error: "Failed to update form title",
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
      toast.error("Failed to update form title");
    }
  };

  return {
    onUpdateTitle,
    setTitle,
  };
};
