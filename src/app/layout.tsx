import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Generate using the hands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
