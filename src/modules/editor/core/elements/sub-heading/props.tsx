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

import { CustomInstance } from "./common";

import useElement from "@/hooks/use-element";
import {
  SubHeadingPropsSchemaType,
  subHeadingPropsSchema,
} from "../../schemas/sub-heading";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  const { updateElement } = useElement();

  const items = element as CustomInstance;
  const { heading } = items.attributes;

  const form = useForm<SubHeadingPropsSchemaType>({
    resolver: zodResolver(subHeadingPropsSchema),
    mode: "onBlur",
    defaultValues: {
      subHeading: heading,
    },
  });

  useEffect(() => {
    form.reset(items.attributes);
  }, [items, form]);

  function applyChanges(values: SubHeadingPropsSchemaType) {
    const { subHeading } = values;
    updateElement(element.id, {
      ...element,
      attributes: {
        subHeading,
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
          name="subHeading"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Heading</FormLabel>
              <FormControl>
                <Input
                  className="shadow-none"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
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
