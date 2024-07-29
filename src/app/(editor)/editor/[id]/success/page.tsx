import LinkButton from "@/components/animate/link-button";
import { CircleCheckBig } from "lucide-react";

import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  return (
    <div className="max-w-7xl mx-auto bg-background rounded-lg border shadow-sm h-[calc(100vh-30px)]">
      <div className="h-[calc(100vh-80px)] bg-background rounded-lg">
        <div className="flex flex-col items-center justify-center h-full w-full rounded-lg ">
          <div className="max-w-md">
            <div className="mx-auto max-w-md text-center mb-24">
              <CircleCheckBig className="mx-auto h-12 w-12 text-green-500" />
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Success!
              </h1>
              <p className="mt-4 text-muted-foreground">
                Your form has been published successfully.
              </p>

              <div className="pt-8 flex items-center gap-6 justify-center">
                <LinkButton label="Home" href="/forms" />
                <LinkButton label="Details" href={`/forms/${id}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
