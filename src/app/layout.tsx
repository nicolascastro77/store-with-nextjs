

import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { Description } from "./components/home/Description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts";
import './globals.css';
import { Ultra } from "next/font/google";
import { PT_Serif } from "next/font/google";

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ultra',
})

const pt_serif = PT_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pt_serif',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ultra.variable} ${pt_serif.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

