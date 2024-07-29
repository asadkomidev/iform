"use client";

import { Container } from "@/components/layouts";

import DashboardImage2 from "@/public/dash-light.svg";
import DashboardImage3 from "@/public/main.svg";
import DashSingleLight from "@/public/single-light.svg";
import DashSingleDark from "@/public/single.svg";
import { AnimatedCursor } from "./arrows";
import ImageComponent from "@/global/layouts/Image-component";

type Props = {};

export default function Showcase({}: Props) {
  return (
    <Container className="relative">
      <div className="">
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-between  h-full gap-12">
            <div className="h-full mb-6">
              <h1 className="text-3xl">Header</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
            <div className="relative h-full mt-8 md:mt-24 p-2">
              <div className="absolute -top-24 -md:left-24 z-10">
                <AnimatedCursor text={"All forms"} />
              </div>
              {/* <FormsDashboard /> */}
              <ImageComponent
                darkImage={DashboardImage3}
                lightImage={DashboardImage2}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-2">
            <div className="relative">
              <div className="absolute -top-24 -md:left-24 z-10">
                <AnimatedCursor text={"Single form"} />
              </div>
              <ImageComponent
                darkImage={DashSingleDark}
                lightImage={DashSingleLight}
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
