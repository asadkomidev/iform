import { getFormByURLAction } from "@/actions/form-actions";

import FormSubmit from "@/modules/submissions";
import { ElementInstance } from "@/types/elements/instances";

type Props = {
  params: {
    url: string;
  };
};

const Page = async ({ params: { url } }: Props) => {
  const form = await getFormByURLAction(url);
  if (!form) {
    return <div>Form not found</div>;
  }

  const formContent = JSON.parse(form.content || "") as ElementInstance[];
  return <FormSubmit content={formContent} url={url} form={form} />;
};

export default Page;
