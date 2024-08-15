import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Loader from "./[lang]/_components/_loader/loader";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Reis do Carmo",
  description: "Portfólio Bruno Reis do Carmo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Loader>
            <Header />
            <div className="px-8 pl-20 md:pl-20 md:px-8 lg:px-12 xl:px-20  2xl:px-64 mb-4">
              {children}
              <Footer />
            </div>
          </Loader>
        </ThemeProvider>
      </body>
    </html>
  );
}
