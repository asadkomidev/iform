"use client";

import { Loader2, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";

import { publishFormAction } from "@/actions/form-actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FormType } from "@/backend/database/types";
import useElement from "@/hooks/use-element";
import { parseFormContent } from "@/modules/dashboard/forms/functions/form-functions";

type Props = {
  form: FormType;
};

const PublishButton = ({ form }: Props) => {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const { elements } = useElement();

  const content = parseFormContent(form.content);

  async function publishForm() {
    try {
      await publishFormAction(form.id);
      toast.success("Form published successfully");
      router.push(`/editor/${form.id}/success`);
    } catch (error) {
      toast.error("Failed to publish form");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={content.length !== elements.length}
          size="sm"
          className="flex items-center gap-2">
          <span className="">
            <Send className="size-3" />
          </span>
          <span className="hidden md:flex">
            {form.published ? "Republish" : "Publish"}
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish form</AlertDialogTitle>
          <AlertDialogDescription>
            By publishing this form you will make it available to the public and
            you will be able to collect submissions.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(publishForm);
            }}>
            Proceed {loading && <Loader2 className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PublishButton;
