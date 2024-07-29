"use client";

import { Home, TriangleAlert } from "lucide-react";
import Link from "next/link";

import { FormType } from "@/backend/database/types";
import PreviewButton from "./preview-btn";
import SaveButton from "./save-btn";
import PublishButton from "./publish-btn";
import { useTitle } from "../canvas/title/states/use-title";

type Props = {
  form: FormType;
};

const Header = ({ form }: Props) => {
  const { title } = useTitle();

  return (
    <div className="border-b flex items-center justify-between px-4 w-full h-12">
      <div className="truncate flex items-center gap-2">
        <Link href="/forms">
          <Home className="size-4" />
        </Link>
        <div className="truncate">
          <p className="text-sm text-muted-foreground truncate pr-6">
            {title || form.title}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <PreviewButton form={form} />
        <SaveButton id={form.id} />
        <PublishButton form={form} />
      </div>
    </div>
  );
};

export default Header;
