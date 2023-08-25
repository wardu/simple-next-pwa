import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple PWA",
  description: "Created by Wardu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <link rel='manifest' href='/manifest.json' />
      <link rel='apple-touch-icon' href='/icon-512x512.png'></link>
      <meta name='theme-color' content='#000' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
