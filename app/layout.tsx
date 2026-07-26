import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";
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
  title: "Mehedi Hasan — Software Developer",
  description:
    "Mehedi Hasan is a professional MERN & Next.js developer specializing in modern UI/UX, scalable web applications, and high‑performance frontend engineering.",
  metadataBase: new URL("https://mehedi-hasan.me"),
  keywords: [
    "Mehedi Hasan",
    "Mehedi-Hasan.me",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Engineer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Go Developer",
    "Bangladesh Developer",
    "Web Developer",
     "Software Developer",  
  ],
  authors: [{ name: "Mehedi Hasan" }],
  creator: "Mehedi Hasan",
  publisher: "Mehedi Hasan",
  openGraph: {
    title: "Mehedi Hasan — Software Developer",
    description:
      "Professional MERN & Next.js Developer building modern, fast, and scalable digital experiences.",
    url: "https://mehedi-hasan.me",
    siteName: "Mehedi Hasan Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/profile/mehedi-hasan.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan — Software Developer",
    description:
      "Professional MERN & Next.js Developer specializing in modern UI/UX and scalable web applications.",
    images: ["/profile/mehedi-hasan.png"],
  },
  other: {
    linkedin: "https://www.linkedin.com/in/themehedihq",
    x: "https://x.com/themehedihq",
  },
};


export default async function RootLayout() {
  const initialTheme = await getTheme();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${calSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme={initialTheme || "dark"}
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollLayout />
        </ThemeProvider>
      </body>
    </html>
  );
}
