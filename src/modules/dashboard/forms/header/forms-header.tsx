"ues client";

import FormsBreadcrumb from "./forms-breadcrumb";
import Search from "./search";

type Props = {
  page: number;
};

export default function FormsHeader({ page }: Props) {
  return (
    <div className=" h-10 flex items-center py-8 justify-between ">
      {/* <div className="w-2/3 md:w-full">
        <FormsBreadcrumb />
      </div> */}
      <div className="w-[230px] ml-auto">
        <Search page={page} />
      </div>
    </div>
  );
}
