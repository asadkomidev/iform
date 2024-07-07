import { Button } from "@/components/ui/button";
import PageLayout from "@/global/layouts/page";

type Props = {};

const Page = (props: Props) => {
  return (
    <PageLayout
      title="Dashboard"
      description="Here you can see an overview of your account."
      button={<Button className="btn">Create</Button>}>
      <div className="border border-dashed h-[60vh] rounded-lg bg-muted">
        <p className="text-center text-muted-foreground mt-8">
          Page content goes here
        </p>
      </div>
    </PageLayout>
  );
};

export default Page;
