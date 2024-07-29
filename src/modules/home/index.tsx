"use client";

import Hero from "./hero";
import { Main } from "@/components/layouts";
import Showcase from "./showcase";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FeaturesSection } from "./features";

type Props = {};

const HomePage = (props: Props) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <Main className="">
      <Hero />
      <Showcase />
      <FeaturesSection />
    </Main>
  );
};

export default HomePage;
