"use client";
import "./globals.css";
import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { Providers } from "./Providers";

import { createContext } from "react";

export const ThemeContext = createContext({});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>
        <NextUIProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <Suspense fallback={<Loading />}>
              <Main>
                <Providers>{children} </Providers>
              </Main>
            </Suspense>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
