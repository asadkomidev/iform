import { getFormAction } from "@/actions/form-actions";
import Details from "@/modules/dashboard/forms/details";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params: { id } }: Props) => {
  const form = await getFormAction(id);
  if (!form) {
    throw new Error("form not found");
  }
  const { visits, submissions } = form;

  let submissionRate = 0;

  if (visits !== null && visits > 0 && submissions !== null) {
    submissionRate = (submissions / visits) * 100;
  }

  let bounceRate = 0;
  if (visits !== null && visits > 0) {
    bounceRate = 100 - submissionRate;
  }

  return (
    <div className="">
      <Details
        form={form}
        visits={visits}
        submissions={submissions}
        submissionRate={submissionRate}
        bounceRate={bounceRate}
      />
    </div>
  );
};

export default Page;
