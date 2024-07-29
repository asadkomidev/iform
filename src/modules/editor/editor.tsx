import { getFormAction } from "@/actions/form-actions";
import Header from "./header/header";
import Canvas from "./canvas/canvas";
import Published from "./published";

type Props = {
  id: string;
};

const Editor = async ({ id }: Props) => {
  const form = await getFormAction(id);

  // if (form && form.published) {
  //   return <Published form={form} />;
  // }
  return (
    <div className="max-w-7xl mx-auto bg-background rounded-lg border shadow-sm h-[calc(100vh-30px)]">
      <Header form={form} />
      <div className="h-[calc(100vh-80px)] bg-muted rounded-bl-lg rounded-br-lg">
        <Canvas form={form} />
      </div>
    </div>
  );
};

export default Editor;
