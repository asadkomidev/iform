"use client";

import { useCallback, useRef, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitFormAction } from "@/actions/form-actions";
import { CircleCheckBig, Loader2 } from "lucide-react";
import { Elements } from "../editor/core";
import { ElementInstance } from "@/types/elements/instances";
import { FormType } from "@/backend/database/types";
import LinkButton from "@/components/animate/link-button";

type Props = {
  form: FormType;
  content: ElementInstance[];
  url: string;
};

const FormSubmit = ({ form, content, url }: Props) => {
  const formValues = useRef<{ [key: string]: string }>({});
  const formErrors = useRef<{ [key: string]: boolean }>({});
  const [renderKey, setRenderKey] = useState(new Date().getTime());

  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  const validateForm: () => boolean = useCallback(() => {
    for (const field of content) {
      const actualValue = formValues.current[field.id] || "";
      const valid = Elements[field.type].validate(field, actualValue);

      if (!valid) {
        formErrors.current[field.id] = true;
      }
    }

    if (Object.keys(formErrors.current).length > 0) {
      return false;
    }

    return true;
  }, [content]);

  const submitValue = useCallback((key: string, value: string) => {
    formValues.current[key] = value;
  }, []);

  const submitForm = async () => {
    formErrors.current = {};
    const validForm = validateForm();

    if (!validForm) {
      setRenderKey(new Date().getTime());
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const jsonContent = JSON.stringify(formValues.current);

      await submitFormAction(url, jsonContent);
      setSubmitted(true);
    } catch (error) {
      toast.error("An error occurred while submitting the form");
    }
  };
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full rounded-lg ">
        <div className="max-w-md">
          <div className="mx-auto max-w-md text-center mb-24">
            <CircleCheckBig className="mx-auto h-12 w-12 text-green-500" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Submitted Successfully!
            </h1>

            <div className="pt-8 flex items-center gap-6 justify-center">
              <LinkButton label="Home" href="/forms" />
              <LinkButton label="Details" href={`/forms/${form.id}`} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative flex mx-auto items-center justify-center  overflow-y-scroll h-full pb-32">
      <div
        key={renderKey}
        className="md:max-w-3xl w-full absolute top-32 pb-32 px-4">
        <div className="flex flex-col gap-4 bg-background w-full  px-4 py-8  border  shadow-lg rounded-lg">
          <div className="pb-8">
            <h1 className="text-2xl font-bold">{form.title}</h1>
            <p className="text-muted-foreground">{form.description}</p>
          </div>
          {content.map((element, i) => {
            const Element = Elements[element.type].form;
            return (
              <Element
                key={`id-${i}` + element.id}
                element={element}
                submitFunction={submitValue}
                isInvalid={formErrors.current[element.id]}
                defaultValue={formValues.current[element.id]}
              />
            );
          })}

          <Button
            className="mt-8"
            onClick={() => {
              startTransition(submitForm);
            }}
            disabled={pending}>
            {!pending && <>Submit</>}
            {pending && <Loader2 className="animate-spin" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
