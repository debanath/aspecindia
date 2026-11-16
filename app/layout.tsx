import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASPEC - After School Professional Education Center | Official Website",
  description:
    "After School Professional Education Center (ASPEC). Accredited computer certifications including BCA, iCA, DCA, PGDCA, ADCA, technical crash courses, student portal, in-app fee payments, and verifiable credentials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#faf8f5] text-stone-900 min-h-screen antialiased selection:bg-amber-200 selection:text-stone-900">
        {children}
      </body>
    </html>
  );
}
