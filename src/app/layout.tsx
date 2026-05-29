import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
// next/font/google downloads fonts at BUILD TIME and self-hosts them.
// Zero layout shift, no external requests to Google at runtime.
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pigmenta",
  description: "A home for artists who deserve to be seen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        suppressHydrationWarning tells React to ignore mismatches on <body>.
        Some browser extensions (e.g. password managers, colour pickers) inject
        attributes like cz-shortcut-listen="true" into <body> after the page
        loads. This causes a harmless React hydration warning — suppressing it
        here is the standard Next.js fix.
      */}
      {/*
        We inject both font CSS variables as class names on <body>.
        This makes --font-cormorant and --font-dm-sans available
        to every component in the app via CSS variables.
      */}
      <body suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
        {/*
          This <div> matches the structure you had in App.tsx:
            <div className="relative">
              <Navbar />
              {page content}
            </div>
        */}
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
