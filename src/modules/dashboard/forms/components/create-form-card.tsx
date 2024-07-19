"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createFormAction } from "@/actions/form-actions";
import { formSchema, formSchemaType } from "@/modules/common/schema";

type Props = {};

const CreateFormCard = (props: Props) => {
  const router = useRouter();
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  async function onClick() {
    const values = {
      title: "Untitled form",
      description: "Form description",
    };
    try {
      const response = await createFormAction(values);
      toast.success("Form created successfully");
      router.push(`/editor/${response.id}`);
    } catch (error) {
      toast.error("Failed to create form");
    }
  }

  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4">
      <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
      <p className=" text-muted-foreground group-hover:text-primary">
        New form
      </p>
    </Button>
  );
};

export default CreateFormCard;
