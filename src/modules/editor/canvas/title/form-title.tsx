"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  title: string;
  setTitle: (title: string) => void;
  onUpdateTitle: (title: string) => void;
};

const FormTitle = ({ title, setTitle, onUpdateTitle }: Props) => {
  const [editingValue, setEditingValue] = useState(title);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      onUpdateTitle(editingValue);
      //@ts-ignore
      event.target.blur();
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target;

    if (target.value.trim() === "") {
      setEditingValue("Untitled form");
    } else {
      setEditingValue(target.value);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.select();
  };

  return (
    <Input
      className="shadow-none text-2xl font-semibold border-none focus:border-transparent focus:ring-0 focus:outline-none focus:text-primary truncate focus:border-none focus-visible:ring-0 "
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={handleFocus}
    />
  );
};

export default FormTitle;
