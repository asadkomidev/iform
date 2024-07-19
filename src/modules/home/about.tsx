import Heading from "@/components/heading";
import TwoColumnSection from "@/components/two-col-section";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <TwoColumnSection className="flex-col lg:flex-row ">
      <Heading
        label="About"
        heading="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel odio nec eros ultricies tincidunt. Donec euismod, ligula in posuere tristique, enim odio tincidunt lacus, nec ultricies libero urna nec sapien.">
        <Button>Learn More</Button>
      </Heading>
    </TwoColumnSection>
  );
};

export default About;
