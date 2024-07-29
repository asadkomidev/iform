"use client";

import { Container, SVGContainer } from "@/components/layouts";

import DropDark from "@/public/drop-dark.svg";
import DropLight from "@/public/drap-light.svg";
import PublishDark from "@/public/publish-dark.svg";
import PublishLight from "@/public/publish-light.svg";
import ImageComponent from "@/global/layouts/Image-component";
import Link from "next/link";

type Props = {};

export default function Services({}: Props) {
  return (
    <Container className="py-12 md:pt-24">
      <SVGContainer className="py-12 md:py-24">
        {/* <BackgroundGrid /> */}
        <div className="flex flex-col gap-4 z-[10]">
          <div className="">
            <div className="max-w-3xl pb-12">
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
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <div className="w-full p-4 md:py-11 border rounded-lg h-full bg-background">
              <ImageComponent
                darkImage={DropDark}
                lightImage={DropLight}
                className="w-full"
              />
            </div>
            <div className="w-full p-4 border rounded-lg h-full bg-background">
              <ImageComponent
                darkImage={PublishDark}
                lightImage={PublishLight}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </SVGContainer>
    </Container>
  );
}
