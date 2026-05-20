import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const interSans = Inter({
  variable: "--default-font-family",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DevLinks",
  description:
    "DevLinks é um agregador de links responsivo e com troca de tema que você pode usar como cartão de visitas nas suas redes sociais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interSans.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
