import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap"
});

const editorialFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Antigos de Pouso — Histórias que atravessam gerações",
    template: "%s | Antigos de Pouso"
  },
  description: "Uma comunidade que celebra a preservação automobilística, os encontros e as histórias sobre rodas em Pouso Redondo, Santa Catarina.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3333"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Antigos de Pouso",
    title: "Antigos de Pouso — Histórias que atravessam gerações",
    description: "Memórias, encontros e paixão por veículos clássicos."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${editorialFont.variable}`}>{children}</body>
    </html>
  );
}
