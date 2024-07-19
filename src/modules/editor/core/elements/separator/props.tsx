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
  ParagraphPropsSchemaType,
  paragraphPropsSchema,
} from "../../schemas/paragraph";
import { Textarea } from "@/components/ui/textarea";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  const { updateElement } = useElement();

  const items = element as CustomInstance;
  const { heading } = items.attributes;

  const form = useForm<ParagraphPropsSchemaType>({
    resolver: zodResolver(paragraphPropsSchema),
    mode: "onBlur",
    defaultValues: {
      paragraph: heading,
    },
  });

  useEffect(() => {
    form.reset(items.attributes);
  }, [items, form]);

  function applyChanges(values: ParagraphPropsSchemaType) {
    const { paragraph } = values;
    updateElement(element.id, {
      ...element,
      attributes: {
        paragraph,
      },
    });
  }

  return <p>No properties for this element</p>;
};

export default Props;
