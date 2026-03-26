import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-cabinet",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Deviio — Devis & Factures pour artisans",
  description:
    "Créez vos devis et factures en 2 minutes depuis votre téléphone. Application de facturation mobile-first pour artisans et auto-entrepreneurs français. Conforme e-facture 2026.",
  keywords:
    "devis facture artisan, application facturation, devis auto-entrepreneur, e-facture 2026",
  openGraph: {
    title: "Deviio — Devis & Factures pour artisans",
    description:
      "Créez vos devis et factures en 2 minutes depuis votre téléphone. Conforme e-facture 2026.",
    url: "https://deviio.app",
    siteName: "Deviio",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://deviio.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${instrumentSans.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
