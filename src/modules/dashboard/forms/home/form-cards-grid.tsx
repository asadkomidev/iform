"use client";

import CreateCard from "./create-card";
import FormCard from "./form-card";
import { FormType } from "@/backend/database/types";

type Props = {
  data: FormType[];
};

export default function FormCardsGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <CreateCard />

      {data.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </div>
  );
}
