"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/Container";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const createAccount = async () => {
      const firstName = searchParams.get("firstName");
      const lastName = searchParams.get("lastName");
      const email = searchParams.get("email");
      const phone = searchParams.get("phone");

      if (!firstName || !lastName || !email || !phone) {
        setStatus("error");
        setErrorMessage("Missing required information. Please go back and try again.");
        return;
      }

      try {
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
          }),
        });

        if (!response.ok) {
          const result = await response.json();
          setStatus("error");
          setErrorMessage(result.message || "Failed to create account. Please try again.");
          return;
        }

        const result = await response.json();

        if (result.success && result.redirect) {
          // Small delay to ensure conversion tracking fires
          setTimeout(() => {
            window.location.href = result.redirect;
          }, 500);
        } else {
          setStatus("error");
          setErrorMessage(result.message || "Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error("Account creation error:", err);
        setStatus("error");
        setErrorMessage("An error occurred. Please try again.");
      }
    };

    createAccount();
  }, [searchParams]);

  if (status === "error") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-3xl border border-red-200 bg-white p-12 shadow-soft">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold text-slate-900">
                Oops! Something went wrong
              </h1>
              <div
                className="mt-4 text-slate-600"
                dangerouslySetInnerHTML={{ __html: errorMessage }}
              />
              <a
                href="/"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-emerald-700 hover:via-teal-600 hover:to-sky-600"
              >
                Go Back to Home
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-12 shadow-soft backdrop-blur">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-100 to-sky-100">
              <svg
                className="h-8 w-8 animate-spin text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Preparing your dashboard...
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We're setting up your Stock Fundamentals account. You'll be
              redirected in just a moment.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" style={{ animationDelay: "0ms" }} />
              <div className="h-2 w-2 animate-bounce rounded-full bg-teal-500" style={{ animationDelay: "150ms" }} />
              <div className="h-2 w-2 animate-bounce rounded-full bg-sky-500" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
