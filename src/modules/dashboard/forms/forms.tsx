import { getFormsAction } from "@/actions/form-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { FORM_PER_PAGE } from "@/global/constants/constants";

import FormPagination from "./components/pagination";
import Search from "./components/search";
import CreateFormCard from "./components/create-form-card";
import FormCard from "./components/form-card";

type Props = {
  search: string;
  page: number;
};

const Forms = async ({ search, page }: Props) => {
  const { formList: form, total, perPage } = await getFormsAction(search, page);
  return (
    <div className="px-4 pb-8">
      <div className=" h-10 flex items-center py-8 mb-8 justify-between ">
        <div className="w-full ">
          <Breadcrumb className="">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/forms">Forms</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="w-full">
          <Search page={page} />
        </div>
      </div>
      <div className=" min-h-[60vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <CreateFormCard />

          {form.map((form) => (
            <FormCard key={form.id} form={form} />
          ))}
        </div>
      </div>
      {form.length >= FORM_PER_PAGE && (
        <div className="flex items-center justify-center py-12">
          <FormPagination
            search={search ?? ""}
            page={page}
            perPages={Math.ceil(total / perPage)}
          />
        </div>
      )}
    </div>
  );
};

export default Forms;
