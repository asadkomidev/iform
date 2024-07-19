import { Button } from "@/components/ui/button";
import SectionWrapper from "../../components/section";
import Heading from "@/components/heading";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <SectionWrapper className="">
        <Heading
          label="Label"
          heading="Heading"
          description="Description"
          className="mx-auto items-center text-center">
          <Button>Button one</Button>
          <Button variant="ghost">Button two</Button>
        </Heading>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
