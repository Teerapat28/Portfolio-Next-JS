import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaSpaceAwesome } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <SparklesCore
        className="w-full h-screen absolute"
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={20}
        particleColor="#FFFFFF"
      />

      <BackgroundBeams className="w-full h-screen absolute"/>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 w-[50vw]" fill="blue" />
      </div>

      {/* <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex 
        items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex 
          items-center justify-center dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div> */}

      <div className="flex justify-center relative mt-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web with Next.js
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px]
        md:text-5xl lg:text-6xl"
            words="Welcome to my TIME & SPACE"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Teerapat, a Front-end developer
          </p>

          <a className="" href="#about">
            <MagicButton 
            title="My projects"
            icon={<FaSpaceAwesome/>}
            position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
