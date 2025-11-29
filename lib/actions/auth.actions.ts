"use server";

import { currentUser } from "@clerk/nextjs/server";

type SignUpParams = {
  uid: string;
  name: string;
  email: string;
};

const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 500;
export async function createUserAfterSignUp(retries = 0): Promise<void> {
  try {
    const resp = await fetch(process.env.BASE_URL_LOCAL + "/api/users/upsert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin", // ensure cookies are forwarded to Clerk API on same origin
    });
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      throw new Error(`Upsert failed: ${resp.status} ${text}`);
    }
  } catch (err) {
    if (retries < MAX_RETRIES) {
      const backoff = INITIAL_BACKOFF_MS * 2 ** retries;
      await new Promise((r) => setTimeout(r, backoff));
      return createUserAfterSignUp(retries + 1);
    }
    // rethrow so caller can log/handle
    throw err;
  }
}

export async function isAuthenticated() {
  const user = await currentUser();
  // if user exist return true : user = {} = truthy
  // user = '' = falsy
  return !!user;
}
