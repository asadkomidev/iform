"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ElementInstance } from "@/types/elements/instances";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import useElement from "@/hooks/use-element";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  checkboxAnswerPropsSchema,
  CheckboxAnswerPropsSchemaType,
} from "../../schemas/checkbox-answer";
import { CustomInstance } from "./common";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  const { updateElement } = useElement();

  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;

  const form = useForm<CheckboxAnswerPropsSchemaType>({
    resolver: zodResolver(checkboxAnswerPropsSchema),
    mode: "onBlur",
    defaultValues: {
      question: question,
      instructions: instructions,
      required: required,
    },
  });

  useEffect(() => {
    form.reset(items.attributes);
  }, [items, form]);

  function applyChanges(values: CheckboxAnswerPropsSchemaType) {
    const { question, instructions, required } = values;
    updateElement(element.id, {
      ...element,
      attributes: {
        question,
        instructions,
        required,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-5">
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
                Here is the instructions for the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
                Write the instructions for the user.
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
                <FormDescription className="text-xs">
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
      </form>
    </Form>
  );
};

export default Props;
