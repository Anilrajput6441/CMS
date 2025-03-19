"use client";
import React from "react";

import BlurText from "./blurtext";

const Hero = () => {
  //   const handleAnimationComplete = () => {
  //     console.log("Animation completed!");
  //   };
  return (
    <div className="mt-20 w-[100vw] flex flex-col justify-center items-center">
      <BlurText
        text="Update your Panel with Ease!"
        delay={150}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="text-6xl mb-8 roboto-mono font-extrabold ]"
      />
      <BlurText
        text="Empowering businesses with seamless CMS updates and dynamic catalog management — ensuring your content stays fresh, organized, and optimized for growth."
        delay={150}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="text-xl mb-8 w-[50vw] roboto-mono font-extrabold ]"
      />
    </div>
  );
};

export default Hero;
