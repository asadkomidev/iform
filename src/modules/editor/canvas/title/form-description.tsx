"use client";

import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

type Props = {
  description: string;
  setDescription: (value: string) => void;
  onUpdateDescription: (value: string) => void;
};

const FormDescription = ({
  description,
  setDescription,
  onUpdateDescription,
}: Props) => {
  const [editingValue, setEditingValue] = useState(description);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      onUpdateDescription(editingValue);
      //@ts-ignore
      event.target.blur();
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = event.target;

    if (target.value.trim() === "") {
      setEditingValue("Untitled form");
      setDescription("Untitled form");
    } else {
      setEditingValue(target.value);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    target.select();
  };

  return (
    <Textarea
      className="shadow-none text-md text-muted-foreground border-none focus:border-transparent focus:ring-0 focus:outline-none focus:text-primary focus:border-none focus-visible:ring-0  resize-none"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={handleFocus}
      placeholder="Form description"
    />
  );
};

export default FormDescription;
