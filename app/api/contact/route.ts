import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fetch(
      "https://script.google.com/macros/s/AKfycbwfG9v7tUJ-u7BWAmQGl1JlsPFblhP7Qin6qv9RRL4ruGHSwHSRcEWLND1dvaWzEguuYg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
