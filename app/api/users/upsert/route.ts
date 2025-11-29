import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { db } from "@/lib/firebase/admin";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, name, email, createdAt } = body;

  try {
    const ref = db.collection("users").doc(email);
    const snap = await ref.get();

    if (!snap.exists) {
      await ref.set({
        id,
        name,
        email,
        credit: 2,
        createdAt,
      });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Upsert Error:", err);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
