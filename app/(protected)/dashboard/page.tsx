"use client";

import { usePathname } from "next/navigation";
import PromptBox from "@/components/PromptBox";
import Project from "@/components/Project";
import { useUser } from "@clerk/nextjs";
import { useEffect} from "react";
import { createUserAfterSignUp } from "@/lib/actions/auth.actions";

const page = () => {
  const path = usePathname();
  const { isSignedIn, user } = useUser();
  

  return (
    <div>
      {path === "/dashboard" && (
        <div>
          <PromptBox /> <Project />
        </div>
      )}
    </div>
  );
};

export default page;
