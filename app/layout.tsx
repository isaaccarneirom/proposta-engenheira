import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proposta comercial | Presença digital profissional",
  description:
    "Proposta personalizada para desenvolvimento de Landing Page ou Site Institucional com Link Bio.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
