import React from "react";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { HeroVideoDialog } from "../ui/hero-video-dialog";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-4">
      <h2 className="font-bold text-5xl">
        From Idea to <span className="text-primary">Presentation</span> in one
        click ⚡️
      </h2>
      <p className="text-xl text-gray-500 max-w-xl text-center">
        Generate sleek, editable presentations. Save hours on design, focus on
        you story.
      </p>
      <div className="flex gap-5 mt-10">
        <Button variant={"outline"} size={"lg"}>
          Watch Video <Play />
        </Button>
        <Button size={"lg"}>Get Started</Button>
      </div>
      <div className="relative max-w-3xl mt-14">
        <h2 className="text-center my-4">
          Watch how to create your first AI presentation 👀 🤯
        </h2>
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default Hero;
