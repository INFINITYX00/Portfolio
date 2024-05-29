import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    // Ensure the error is an instance of Error
    if (!(error instanceof Error)) {
      error = new Error(String(error));
    }
    Sentry.captureException(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
