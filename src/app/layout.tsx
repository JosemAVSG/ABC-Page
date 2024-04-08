import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const bebas = Bebas_Neue({ subsets: ["latin"],weight:'400' });

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
      <body className={`${bebas.className} antialiased`} >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
