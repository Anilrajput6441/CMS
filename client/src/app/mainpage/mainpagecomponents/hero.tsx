"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import BlurText from "./blurtext";
// import { LayoutGrid } from "@/components/ui/layout-grid";
import { LayoutGridDemo } from "./layoutgrid";
import { AnimatedTestimonialsDemo } from "./teammember";
import { StickyScrollRevealDemo } from "./approach";

const Hero = () => {
  //   const handleAnimationComplete = () => {
  //     console.log("Animation completed!");
  //   };

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Webapps",
    },
    {
      text: "with",
    },
    {
      text: "CodeMap.",
      className: "text-blue-500 dark:text-[#C3EB2F]",
    },
  ];

  return (
    <div className="mt-20 w-[100vw] flex flex-col justify-center items-center ">
      <BlurText
        text="Update your Panel with Ease!"
        delay={50}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="text-3xl lg:text-6xl mb-8 roboto-mono flex justify-center lg:ml-0 font-extrabold "
      />
      <BlurText
        text="Empowering businesses with seamless CMS updates and dynamic catalog management — ensuring your content stays fresh, organized, and optimized for growth."
        delay={50}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="text-lg  lg:mb-8 w-[95%] lg:w-[50vw] flex justify-center roboto-mono font-extrabold "
      />
      <LayoutGridDemo />
      <div className="absolute mt-[70px] hidden lg:block z-[-1] bg-gradient-to-b from-[#C3EB2F] to-transparent w-[94vw] rounded-[2rem] h-[100vh]"></div>

      <AnimatedTestimonialsDemo />
      <StickyScrollRevealDemo />

      <div className="flex flex-col  items-center justify-center h-[20rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to Open World starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-[#FFFFFF] hover:text-black">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-white  text-sm hover:bg-[#0A0A0A] hover:text-white">
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
