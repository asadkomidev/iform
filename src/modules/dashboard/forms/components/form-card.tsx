"use client";

import { formatDistance } from "date-fns";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deleteFormAction } from "@/actions/form-actions";
import { FormType } from "@/backend/database/types";
import LinkButton from "@/components/animate/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useConfirm } from "@/hooks/use-confirm";

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
      <ConfirmDialog />
      <Card
        // onClick={onClick}
        className="shadow-sm rounded-lg relative h-48  cursor-pointer ">
        <CardHeader className="px-4">
          <CardTitle className="flex items-center gap-2 justify-between">
            <div className="text-xs font-normal text-muted-foreground">
              {formatDistance(form?.createdAt!, new Date(), {
                addSuffix: true,
              })}
            </div>
            {form.published ? (
              <div className="">
                <span className="text-green-500 text-xs w-full">Published</span>
              </div>
            ) : (
              <div className="">
                <span className="text-red-500 text-xs w-full">Draft</span>
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[32px] text-sm px-4 truncate whitespace-nowrap">
          <span className=" font-bold">{form.title}</span>
        </CardContent>
        <div className="mt-8 px-4 absolute bottom-2 w-full flex items-center justify-between">
          <div className="">
            <Trash
              className="text-red-500 size-4 cursor-pointer"
              onClick={handleDelete}
            />
          </div>
          <div className=" justify-end ">
            {form.published ? (
              <div className="">
                <LinkButton label="View form" href={`/forms/${form.id}`} />
              </div>
            ) : (
              <div className="">
                <LinkButton label="Edit form" href={`/editor/${form.id}`} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default FormCard;
