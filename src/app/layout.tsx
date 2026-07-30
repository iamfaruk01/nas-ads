import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasiur Rahman | Meta Ads Manager — Scale Your Brand with Data-Driven Ads",
  description:
    "Award-winning Meta Ads Manager specializing in scaling e-commerce brands. $5M+ ad spend managed, 4.2× average ROAS, 120+ campaigns scaled. Let's grow your brand.",
  keywords: [
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "E-commerce Marketing",
    "ROAS",
    "Performance Marketing",
  ],
  openGraph: {
    title: "Nasiur Rahman | Meta Ads Manager",
    description: "Scaling E-commerce Brands with Data-Driven Meta Ads.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#050505] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
