"use client";

import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const HeroButton = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button size={"lg"}>Get Started</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size={"lg"}>
          <Link href={"/dashboard"}>Go to Dashboard</Link>
        </Button>
      </SignedIn>
    </div>
  );
};

export default HeroButton;
