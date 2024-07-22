"use client";

import { FormType } from "@/backend/database/types";

import VisitButton from "./visit-button";
import ShareButton from "./share-button";
import HeaderBreadcrumb from "./form-breadcrumb";

type Props = {
  form: FormType;
};

const FormHeader = ({ form }: Props) => {
  return (
    <div className="flex items-center justify-between h-10 py-8 mb-8">
      <HeaderBreadcrumb data={form} />
      <div className="flex items-center gap-4">
        <VisitButton url={form.url || ""} />
        <ShareButton url={form.url || ""} />
      </div>
    </div>
  );
};

export default FormHeader;
