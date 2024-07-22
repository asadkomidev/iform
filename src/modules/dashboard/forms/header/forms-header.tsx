"ues client";

import FormsBreadcrumb from "./forms-breadcrumb";
import Search from "./search";

type Props = {
  page: number;
};

export default function FormsHeader({ page }: Props) {
  return (
    <div className=" h-10 flex items-center py-8 mb-8 justify-between ">
      <div className="w-full">
        <FormsBreadcrumb />
      </div>
      <div className="w-full">
        <Search page={page} />
      </div>
    </div>
  );
}
