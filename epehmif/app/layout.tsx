import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "EPEHMIF — Église Protestante Évangélique Hmong d'Île-de-France",
  description:
    "Une maison commune à Saint-Vrain : cultes, prédications, ministères et vie communautaire de l'EPEHMIF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${workSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-txt">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
