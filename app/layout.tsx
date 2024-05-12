import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-col min-h-screen flex">
          <Header/>
          {children}
          <footer className="footer footer-center text-base-content bg-base-300 py-5">
            <p className="text-[16px]"> &copy; Copyright all rights reserved by sahil-it</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
