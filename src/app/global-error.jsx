"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
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
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
