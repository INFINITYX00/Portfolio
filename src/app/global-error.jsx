"use client";

import * as Sentry from "@sentry/nextjs";
import { ErrorBoundary } from "@sentry/nextjs";
import { useEffect, useRef } from "react";

export default function GlobalError({ error }) {
  const errorRef = useRef(error);

  useEffect(() => {
    if (!(errorRef.current instanceof Error)) {
      errorRef.current = new Error(errorRef.current);
    }
    Sentry.captureException(errorRef.current);
  }, [errorRef]);

  return (
    <ErrorBoundary fallback={"An error has occurred"}>
      <html>
        <body>{/* Your content here */}</body>
      </html>
    </ErrorBoundary>
  );
}
