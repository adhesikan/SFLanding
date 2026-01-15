import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = (await request.json()) as {
    name?: string;
    email?: string;
  };

  console.log("New lead captured:", { name, email });

  return NextResponse.json({ success: true });
}
