"use client";

import { useUser } from "@clerk/nextjs";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const userData = {
    id: user?.id,
    name: user?.fullName,
    email: user?.primaryEmailAddress?.emailAddress,
    createdAt: user?.createdAt,
  };

  useEffect(() => {
    async function run() {
      await fetch("/api/users/upsert", {
        method: "POST",
        body: JSON.stringify(userData),
      });
    }

    if (user) {
      run();
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
