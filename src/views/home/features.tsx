import GridSection from "@/components/grid-section";
import { Card } from "@/components/ui/card";

export const FEATURES = [
  {
    title: "Feature 1",
    description: "Description 1",
    image: "/placeholder.png",
  },
  {
    title: "Feature 2",
    description: "Description 2",
    image: "/placeholder.png",
  },
  {
    title: "Feature 3",
    description: "Description 3",
    image: "/placeholder.png",
  },
  {
    title: "Feature 4",
    description: "Description 4",
    image: "/placeholder.png",
  },
];

type Props = {};

const Features = (props: Props) => {
  return (
    <GridSection className="sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {FEATURES.map((feature, index) => (
        <Card key={index} className="p-6 bg-muted border-none shadow-none">
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </Card>
      ))}
    </GridSection>
  );
};

export default Features;
