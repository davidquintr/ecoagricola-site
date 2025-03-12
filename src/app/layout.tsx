import type { Metadata } from "next";
import { Alegreya, Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { dictionary } from "./sources/dictionary";
import { Toaster } from "react-hot-toast";

const alegreyaFont = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
})

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: dictionary.name,
  description: dictionary.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${alegreyaFont.variable} ${nunitoFont.variable} ${nunitoFont.className} antialiased`}
      >
        <Header />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
