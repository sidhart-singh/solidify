import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.actions";
import AuthProvider from "../AuthProvider";

// Layout for all the pages which have navigation bar

const layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <AuthProvider>
      <div className="root-layout">{children}</div>
    </AuthProvider>
  );
};

export default layout;
