import Forms from "@/modules/dashboard/forms/forms";

type Props = {
  searchParams: {
    search?: string;
    page?: string;
  };
};

const Page = ({ searchParams }: Props) => {
  const search = searchParams.search;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  return (
    <div className="">
      <Forms search={search ?? ""} page={page} />
    </div>
  );
};

export default Page;
