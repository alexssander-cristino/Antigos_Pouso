import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Antigos de Pouso — Histórias que atravessam gerações",
    template: "%s | Antigos de Pouso"
  },
  description: "Uma comunidade que celebra a preservação automobilística, os encontros e as histórias sobre rodas em Pouso Redondo, Santa Catarina.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
      <body>{children}</body>
    </html>
  );
}
