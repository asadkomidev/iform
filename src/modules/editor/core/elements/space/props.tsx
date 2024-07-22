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
import { CircleHelp } from "lucide-react";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  const { updateElement } = useElement();

  const items = element as CustomInstance;
  const { height } = items.attributes;

  const form = useForm<SpacePropsSchemaType>({
    resolver: zodResolver(spacePropsSchema),
    mode: "onBlur",
    defaultValues: {
      height: height,
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
    <div className="flex flex-col gap-6">
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
                    defaultValue={[height]}
                    min={4}
                    max={200}
                    step={4}
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
      <div className="border rounded-lg p-4 mt-8">
        <span className="flex items-center gap-2 pb-2 text-sm">
          <CircleHelp className="size-4 text-primary" />
          <span className="">Note</span>
        </span>
        <p className="text-muted-foreground text-sm leading-6">
          The space element is used to add space between different elements. It
          is a simple element that can be used to add vertical space between
          different elements.
        </p>
      </div>
    </div>
  );
};

export default Props;
