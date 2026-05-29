// Route: /signin
// IMPORTANT: useSearchParams() from next/navigation requires a <Suspense> boundary.
// So we split this into:
//   1. A "use client" component (SignInContent) that reads the query param
//   2. This page wraps it in <Suspense> — that's the Next.js requirement
import { Suspense } from "react";
import SignInContent from "@/components/SignIn";

export default function SignInPage() {
  return (
    // Suspense is required whenever a client component uses useSearchParams().
    // While the component is loading, we show a simple fallback.
    <Suspense fallback={<div className="min-h-dvh bg-[#F6F4F1]" />}>
      <SignInContent />
    </Suspense>
  );
}
