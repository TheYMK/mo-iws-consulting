import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Jean-Pierre Martin - Expert en Soudure Industrielle | Consultant IWE",
  description:
    "Expert en soudure industrielle certifié IWE. Audit, coordination soudage, DMOS/QMOS, assistance chantier, formation et contrôle qualité. Interventions France & International.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
