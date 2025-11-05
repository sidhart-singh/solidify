"use client";

import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const HeroButton = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button size={"lg"}>Get Started</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size={"lg"}>Go to Dashboard</Button>
      </SignedIn>
    </div>
  );
};

export default HeroButton;
