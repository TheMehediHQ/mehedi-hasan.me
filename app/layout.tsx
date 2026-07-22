import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollLayout from "@/components/layout/ScrollLayout";
import "./globals.css";

const inter = localFont({
  src: "../fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
});

const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  weight: "600",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehedi Hasan | Portfolio",
  description: "Frontend-Focused Full Stack Engineer - Portfolio",
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${calSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <ScrollLayout />
        </ThemeProvider>
      </body>
    </html>
  );
}
