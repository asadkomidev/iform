import Link from "next/link";
import Image from "next/image";

import Section from "./section";

import Placeholder from "@/public/placeholder1.png";
import Placeholder2 from "@/public/placeholder2.png";
import ShinyButton from "./shiny-button";
import { Button } from "@/components/ui/button";
import { AnimatedCursor } from "./arrows";
import { BrowserComponent } from "./browser";
import { SVGSection } from "./section-svg";
import { Container } from "@/components/layouts";

const Hero = () => {
  return (
    <Section className=" h-full ">
      <Container className="not-prose min-h-1/2  py-2 mb-4">
        <SVGSection>
          <div className="flex flex-col w-full justify-between  pt-24 md:pt-32 ">
            <div className="pb-4">
              <ShinyButton text="we have removed the complexity" className="" />
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
        </SVGSection>
      </Container>
      <Container className="not-prose    flex items-end justify-end min-h-[600px] bg-blue-300">
        <div className=" w-full flex items-end justify-end  p-2 bg-blue-200">
          <div className="hidden  md:block relative p-2  ml-auto bg-green-200">
            <BrowserComponent>
              <Image
                className="object-cover"
                width={350}
                height={100}
                src={Placeholder}
                alt="placeholder"></Image>
            </BrowserComponent>
          </div>

          <div className="h-[420px] w-full md:w-xl  p-2 relative bg-green-300">
            <div className="absolute -top-24 -md:left-24">
              <AnimatedCursor text={"Form performance"} />
            </div>
            <BrowserComponent>
              <Image
                className=" object-cover aspect-video"
                width={500}
                height={500}
                src={Placeholder2}
                alt="placeholder"></Image>
            </BrowserComponent>
          </div>
        </div>
      </Container>
      {/* <Container>
        <Features />
      </Container> */}
    </Section>
  );
};

export default Hero;
