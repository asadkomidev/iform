import { Container, SVGContainer } from "@/components/layouts";

import { LineChartDisplay } from "./line-chart";

type Props = {};

export default function DisplayCharts({}: Props) {
  return (
    <Container>
      <div className=" py-12">
        <div className="relative w-full">
          <div className="w-full md:max-w-3xl pt-32 md:pt-0 border rounded-lg">
            <LineChartDisplay />
          </div>
          <div className="absolute top-0 max-w-sm right-16 border rounded-lg p-4">
            <h1 className="text-3xl font-semibold">
              Insightful form analytics
            </h1>
            <p className="pt-2 text-muted-foreground">
              Understand your audience better with our form analytics. and make
              data-driven decisions to improve your forms.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
