import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Provider from "@/Providers/Provider";

const popinesFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const soaceage = {
  variable: "--font-spaceage",
  path: "/fonts/spaceage.ttf",
  weight: " 100 900",
  style: "normal",
};

export const metadata: Metadata = {
  title: "Mobin Ebrahimi",
  description: "vloumVOLUmenzeit ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popinesFont.variable} ${soaceage.variable} bg-bgcolor antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
