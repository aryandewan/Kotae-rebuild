import React from "react"
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import LenisScroll from "@/components/lenis/lenis";

const outFit = localFont({
    src: [
        {
            path: "./font/Outfit-Black.ttf",
            weight: "900",
            style: "normal"
        },
        {
            path: "./font/Outfit-ExtraBold.ttf",
            weight: "800",
            style: "normal"
        },
        {
            path: "./font/Outfit-Bold.ttf",
            weight: "700",
            style: "normal"
        },
        {
            path: "./font/Outfit-SemiBold.ttf",
            weight: "600",
            style: "normal"
        },
        {
            path: "./font/Outfit-Medium.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "./font/Outfit-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./font/Outfit-Light.ttf",
            weight: "300",
            style: "normal"
        },
        {
            path: "./font/Outfit-ExtraLight.ttf",
            weight: "200",
            style: "normal"
        },
        {
            path: "./font/Outfit-Thin.ttf",
            weight: "100",
            style: "normal"
        },
    ],
    variable: '--font-outFit'
})

export const metadata: Metadata = {
  title: "Kotae",
  description: "A.I. ChatBot for Small Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${outFit.variable}`}>
          <LenisScroll>
              {children}
          </LenisScroll>
      </body>
    </html>
  );
}
