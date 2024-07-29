import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="pb-6 w-full">
      <Card className="sm:col-span-2 shadow-none">
        <CardHeader className="pb-3">
          <CardTitle>Overview</CardTitle>
          <CardDescription className="max-w-2xl text-balance leading-relaxed">
            This is and overview of all the forms you have created. To get
            started, click on the Create Form button below to create your first
            form.
          </CardDescription>
        </CardHeader>
        <CardFooter className="space-x-4">
          <Button size="sm">Create Form</Button>
          <Button size="sm" variant="outline">
            Create with AI
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
