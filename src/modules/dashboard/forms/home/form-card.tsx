"use client";

import { formatDistance } from "date-fns";
import { EllipsisVertical, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { deleteFormAction } from "@/actions/form-actions";
import { FormType } from "@/backend/database/types";
import LinkButton from "@/components/animate/link-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useConfirm } from "@/hooks/use-confirm";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  BsFillSendCheckFill,
  BsSendArrowDown,
  BsSendCheck,
} from "react-icons/bs";
import FormActions from "./form-actions";

type Props = {
  form: FormType;
};

const FormCard = ({ form }: Props) => {
  const router = useRouter();

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this broker."
  );

  const onClick = () => {
    if (form.published) {
      router.push(`/forms/${form.id}`);
    } else {
      router.push(`/editor/${form.id}`);
    }
  };

  const handleDelete = async () => {
    const ok = await confirm();
    if (ok) {
      const response = await deleteFormAction(form.id);
      if (response) {
        toast.success("Form deleted successfully");
      } else {
        toast.error("Failed to delete form");
      }
    }
  };

  return (
    <>
      {/* <ConfirmDialog /> */}
      <Card className=" relative h-64 shadow-none flex flex-col justify-between hover:border-gray-300 hover:shadow-sm">
        <CardHeader className="p-3">
          <div className="absolute top-2 right-2 z-10">
            <FormActions data={form} />
          </div>
        </CardHeader>
        <CardContent
          onClick={onClick}
          className="h-full cursor-pointer"></CardContent>
        <CardFooter className="flex items-center justify-between gap-x-4 ">
          <Label className="truncate">{form.title}</Label>
          {form.published ? (
            <ToolTip text="This form is publish, You can edit it and republish it again">
              <BsFillSendCheckFill className=" text-green-700" />
            </ToolTip>
          ) : (
            <ToolTip text="This form is drafted">
              <BsSendArrowDown className=" text-red-700" />
            </ToolTip>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default FormCard;

type ToolTipProps = {
  text?: string;
  children: React.ReactNode;
};

export const ToolTip = ({ text, children }: ToolTipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent align="end" className="bg-accent border">
          <p className="text-muted-foreground text-xs max-w-32 ">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
