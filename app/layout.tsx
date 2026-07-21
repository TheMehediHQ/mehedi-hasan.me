import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollLayout from "@/components/layout/ScrollLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehedi Hasan | Portfolio",
  description: "Frontend-Focused Full Stack Engineer - Portfolio",
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ScrollLayout />
      </body>
    </html>
  );
}
