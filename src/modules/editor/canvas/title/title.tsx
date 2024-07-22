/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Keyboard } from "lucide-react";

import { cn } from "@/lib/utils";
import { FormType } from "@/backend/database/types";

import FormTitle from "./form-title";
import FormDescription from "./form-description";
import { useUpdateTitle } from "./hooks/use-update-title";
import { useUpdateDescription } from "./hooks/use-update-description";
import { useOpen } from "../hooks/use-open";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  form: FormType;
};

const Title = ({ form }: Props) => {
  const { open } = useOpen();
  const { onUpdateTitle, setTitle } = useUpdateTitle(form);
  const { onUpdateDescription, setDescription } = useUpdateDescription(form);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (open) {
      const slideAnimation = async () => {
        await animate(scope.current, {
          x: 0,
          transition: {
            duration: 0.3,
          },
        });
      };

      slideAnimation();
    }
  }, [open]);

  return (
    <motion.div
      ref={scope}
      layout
      className={cn(
        "shadow-none mt-6 md:mt-12 px-1",
        open ? "md:ml-28 md:max-w-2xl " : "max-w-3xl mx-auto"
      )}>
      <div className="h-[130px] border rounded-lg py-4 bg-background md:px-1 relative">
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
    </motion.div>
  );
};

export default Title;
