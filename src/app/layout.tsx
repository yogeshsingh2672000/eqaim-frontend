import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["700", "600", "400", "500"] });

export const metadata: Metadata = {
  title: "feedback app",
  description: "app build by eqaim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={jost.className}>
        {children}
      </body>
    </html>
  );
}
