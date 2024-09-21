import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/shared/footer/footer";
import BasicNavbar from "./components/shared/navbar/navbar";


export const metadata: Metadata = {
  title: "Meshwar EG",
  description: "Your go-to ride-hailing service in Egypt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NextUIProvider>
          <BasicNavbar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
