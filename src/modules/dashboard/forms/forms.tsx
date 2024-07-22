import { getFormsAction } from "@/actions/form-actions";
import { FORM_PER_PAGE } from "@/global/constants/constants";

import FormCardsGrid from "./home/form-cards-grid";
import FormsHeader from "./header/forms-header";
import FormPagination from "./home/form-pagination";

type Props = {
  search: string;
  page: number;
};

const Forms = async ({ search, page }: Props) => {
  const { formList: form, total, perPage } = await getFormsAction(search, page);
  return (
    <div className="px-4 pb-8 ">
      <FormsHeader page={page} />
      <div className=" min-h-[60vh]">
        <FormCardsGrid data={form} />
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
