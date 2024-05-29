"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect, useRef } from "react";

export default function GlobalError({ error }) {
  const errorRef = useRef();

  useEffect(() => {
    // Store the error in the ref
    errorRef.current = error;

    // Ensure the error is an instance of Error
    if (!(errorRef.current instanceof Error)) {
      errorRef.current = new Error(errorRef.current);
    }

    Sentry.captureException(errorRef.current);
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
