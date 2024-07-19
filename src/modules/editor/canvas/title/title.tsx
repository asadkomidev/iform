"use client";

import { Keyboard } from "lucide-react";

import { cn } from "@/lib/utils";
import { FormType } from "@/backend/database/types";

import FormTitle from "./form-title";
import FormDescription from "./form-description";
import { useUpdateTitle } from "./hooks/use-update-title";
import { useUpdateDescription } from "./hooks/use-update-description";
import { useOpen } from "../hooks/use-open";

type Props = {
  form: FormType;
};

const Title = ({ form }: Props) => {
  const { open } = useOpen();
  const { onUpdateTitle, setTitle } = useUpdateTitle(form);
  const { onUpdateDescription, setDescription } = useUpdateDescription(form);

  return (
    <div
      className={cn(
        "shadow-none  md:mt-12 ",
        open ? "md:ml-28 md:max-w-2xl " : "max-w-3xl mx-auto"
      )}>
      <div className="h-[130px] border mx-2 rounded-lg py-4 bg-background md:px-1 relative">
        <FormTitle
          title={form.title}
          setTitle={setTitle}
          onUpdateTitle={onUpdateTitle}
        />
        <FormDescription
          description={form.description!}
          setDescription={setDescription}
          onUpdateDescription={onUpdateDescription}
        />
        <div className="absolute bottom-1 w-full text-[10px] items-center right-4 text-muted-foreground flex justify-end gap-1">
          Press
          <Keyboard className="size-3" />
          <kbd className="italic text-primary"> Enter</kbd>
          to save
        </div>
      </div>
    </div>
  );
};

export default Title;
