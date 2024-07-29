import Link from "next/link";

import ShinyButton from "./shiny-button";
import { Button } from "@/components/ui/button";
import { Container, SVGContainer } from "@/components/layouts";

const Hero = () => {
  return (
    <Container className="py-12">
      <SVGContainer className="py-12 md:py-24">
        <div className="flex items-center gap-5">
          <div className="w-full">
            <div className="flex flex-col w-full justify-between">
              <div className="pb-4">
                <ShinyButton text="we have removed the complexity" />
              </div>
              <div className="max-w-2xl ">
                <h1 className="mb-4 text-3xl font-semibold md:text-6xl">
                  <Link className="transition-all hover:opacity-70" href="#">
                    Build your form with ease
                  </Link>
                </h1>
                <h2 className="md:w-96 text-lg font-light leading-6 text-muted-foreground">
                  Create forms with a simple drag and drop interface and share
                  them with your audience.
                </h2>
              </div>
              <div className="pt-8 flex items-center gap-4">
                <Button className="rounded-full">Get Started</Button>
                <Button variant="link" className="rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SVGContainer>
    </Container>
  );
};

export default Hero;
