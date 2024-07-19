import { FormType } from "@/backend/database/types";

import FormDetails from "./components/form-details";
import SubmissionTable from "./components/table";

type Props = {
  visits: number | null;
  submissions: number | null;
  submissionRate: number | null;
  bounceRate: number | null;
  form: FormType;
};

const Details = ({
  visits,
  submissions,
  submissionRate,
  bounceRate,
  form,
}: Props) => {
  return (
    <div className="px-4">
      <FormDetails
        visits={visits}
        submissions={submissions}
        submissionRate={submissionRate}
        bounceRate={bounceRate}
        form={form}
      />
      <div className="pt-6 pb-12">
        <SubmissionTable id={form.id} />
      </div>
    </div>
  );
};

export default Details;
