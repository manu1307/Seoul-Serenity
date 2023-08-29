import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Seoul Serenity",
  description: "서울에서의 평온을 찾다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-[20px]">{children}</body>
    </html>
  );
}
