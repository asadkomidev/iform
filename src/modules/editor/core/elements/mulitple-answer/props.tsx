"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ElementInstance } from "@/types/elements/instances";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { CustomInstance } from "./common";
import {
  selectAnswerPropsSchema,
  SelectAnswerPropsSchemaType,
} from "../../schemas/select-answer";
import useElement from "@/hooks/use-element";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CirclePlus, Plus, X } from "lucide-react";

import { useOpen } from "@/modules/editor/canvas/hooks/use-open";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  const { updateElement, setSelectedElement } = useElement();
  const { setOpen } = useOpen();

  const items = element as CustomInstance;
  const { question, required, placeHolder, instructions } = items.attributes;

  const form = useForm<SelectAnswerPropsSchemaType>({
    resolver: zodResolver(selectAnswerPropsSchema),
    mode: "onSubmit",
    defaultValues: {
      question: question,
      instructions: instructions,
      required: required,
      placeHolder: placeHolder,
      options: [],
    },
  });

  useEffect(() => {
    form.reset(items.attributes);
  }, [items, form]);

  function applyChanges(values: SelectAnswerPropsSchemaType) {
    const { question, instructions, placeHolder, required, options } = values;
    updateElement(element.id, {
      ...element,
      attributes: {
        question,
        instructions,
        placeHolder,
        required,
        options,
      },
    });

    toast.success("Changes applied successfully");
    setOpen(false);
    setSelectedElement(null);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(applyChanges)} className="space-y-5">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input
                  className="shadow-none"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription className="text-xs">
                Write your question here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
        <FormField
          control={form.control}
          name="options"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Options</FormLabel>
                <Button
                  type="button"
                  size={"sm"}
                  className="gap-2 shadow-none"
                  onClick={(e) => {
                    e.preventDefault(); // avoid submit
                    form.setValue("options", field.value.concat("New option"));
                  }}>
                  <CirclePlus className="size-4" />
                  Add
                </Button>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                {form.watch("options").map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-1">
                    <Input
                      className="shadow-none"
                      placeholder=""
                      value={option}
                      onChange={(e) => {
                        field.value[index] = e.target.value;
                        field.onChange(field.value);
                      }}
                    />
                    <Button
                      type="button"
                      variant={"ghost"}
                      size={"icon"}
                      onClick={(e) => {
                        e.preventDefault();
                        const newOptions = [...field.value];
                        newOptions.splice(index, 1);
                        field.onChange(newOptions);
                      }}>
                      <X className="size-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <FormDescription className="text-xs">
                Use the add button to add options
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Input
                  className="shadow-none"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription className="text-xs">
                Write instructions for the user if any.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-none">
              <div className="space-y-0.5">
                <FormLabel>Required</FormLabel>
                <FormDescription className="text-xs mr-6">
                  Choose wither the field is required or not.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  className="shadow-none"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default Props;
