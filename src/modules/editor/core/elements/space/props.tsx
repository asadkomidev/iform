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
import { SpacePropsSchemaType, spacePropsSchema } from "../../schemas/space";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  const { updateElement } = useElement();

  const items = element as CustomInstance;
  const { heading } = items.attributes;

  const form = useForm<SpacePropsSchemaType>({
    resolver: zodResolver(spacePropsSchema),
    mode: "onBlur",
    defaultValues: {
      height: heading,
    },
  });

  useEffect(() => {
    form.reset(items.attributes);
  }, [items, form]);

  function applyChanges(values: SpacePropsSchemaType) {
    const { height } = values;
    updateElement(element.id, {
      ...element,
      attributes: {
        height,
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
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (px): {form.watch("height")}</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[20]}
                  min={5}
                  max={200}
                  step={1}
                  onValueChange={(value) => {
                    field.onChange(value[0]);
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
