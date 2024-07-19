import Editor from "@/modules/editor/editor";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  return <Editor id={id} />;
};

export default Page;
