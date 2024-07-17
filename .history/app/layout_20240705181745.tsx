import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkedin",
  description: "Social media for professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TOASTER */}
        <header>
          <Header />
        </header>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
