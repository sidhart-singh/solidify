"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2">
      <img src={"./logo.png"} alt="Logo" width={42} height={42} />
      <SignedOut>
        <SignInButton mode="modal">
          <Button size={"lg"}>Sign In</Button>
        </SignInButton>
        {/* <SignUpButton>
          <Button size={"lg"}>Sign Up</Button>
        </SignUpButton> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* <Button size={"lg"}>Dashboard</Button> */}
      </SignedIn>
    </div>
  );
};

export default Header;
