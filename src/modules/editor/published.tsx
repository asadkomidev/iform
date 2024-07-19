"use client";

import { FormType } from "@/backend/database/types";
import PublishSuccess from "./publish-success";

type Props = {
  form: FormType;
};

const Published = ({ form }: Props) => {
  return (
    <div className="max-w-7xl mx-auto bg-background rounded-lg border shadow-sm h-[calc(100vh-30px)]">
      <div className="h-[calc(100vh-80px)] bg-background rounded-lg">
        <PublishSuccess id={form.id} />
      </div>
    </div>
  );
};

export default Published;
