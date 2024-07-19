"use client";

import { EyeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/custom-dialog";
import { Badge } from "@/components/ui/badge";
import { FormType } from "@/backend/database/types";
import useElement from "@/hooks/use-element";

import { Elements } from "../core";

type Props = {
  form: FormType;
};

const PreviewButton = ({ form }: Props) => {
  const { elements } = useElement();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <span className="">
            <EyeIcon className="size-3" />
          </span>
          <span className="hidden md:flex">Preview</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
        <div className="px-4 py-2 border-b">
          <Badge className="bg-green-200 shadow-none text-green-700 border-green-600 flex items-center gap-2 w-fit">
            <span className="animate-pulse">🟢</span>
            <span className="animate-pulse">Preview</span>
          </Badge>
        </div>
        <div className="bg-accent flex flex-col flex-grow items-center justify-center p-4  overflow-y-auto">
          <div className="max-w-3xl flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-lg p-8 overflow-y-auto space-y-4">
            <div className="">
              <h1 className="text-3xl font-semibold">{form.title}</h1>
              <p className="text-muted-foreground">{form.description}</p>
            </div>
            {elements.map((element) => {
              const FormElement = Elements[element.type].form;
              return <FormElement key={element.id} element={element} />;
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewButton;
