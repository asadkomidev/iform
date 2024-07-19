"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  onSubmit: (value: string) => void;
};

const Title = ({ value, setValue, onSubmit }: Props) => {
  const [editingValue, setEditingValue] = useState(value);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      onSubmit(editingValue);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".title-container")) {
      onSubmit(editingValue);
      handleMouseUp();
    }
  };

  const handleMouseDown = () => {
    document.addEventListener("mousedown", handleClickOutside);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.value.trim() === "") {
      setEditingValue(editingValue);
    } else {
      setEditingValue(target.value);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.select();
    handleMouseDown();
  };

  return (
    <Input
      className="text-md font-semibold border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:text-primary truncate focus:border-none focus-visible:ring-0"
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

export default Title;
