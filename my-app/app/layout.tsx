import type { Metadata } from "next";
import { Geist, Geist_Mono, Modak } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modak",
});

export const metadata: Metadata = {
  title: "CupidBox - Love is Blind, We Make the Intro",
  description: "Curated blind dates by human matchmakers. No swiping, just genuine connections.",
  icons: {
    icon: [
      { url: '/cupidbox-logo.svg?v=new', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=new' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${modak.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
