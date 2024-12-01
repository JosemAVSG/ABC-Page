import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/ui/Hero";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ABC-Accesorios",
  description: "Papeleria y Servicio Tecnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased `}>
       <section className="flex flex-col h-screen ">
        <Navbar></Navbar>
        <Hero></Hero>
       </section>
        {children}
      </body>
    </html>
  );
}
