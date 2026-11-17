import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASPEC - After School Professional Education Center | Lanka, Assam",
  description:
    "After School Professional Education Center (ASPEC) - LP Road, Near Bajaj Finance, Lanka (PIN 782446), Assam. Starting 2027. Accredited computer certifications including BCA, iCA, DCA, PGDCA, ADCA, technical crash courses, student portal, in-app fee payments, and verifiable credentials. Helpline: +91 91011 58043.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-950 min-h-screen antialiased selection:bg-[#0066ff] selection:text-white">
        {children}
      </body>
    </html>
  );
}
