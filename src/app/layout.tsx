import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import Link from "next/link";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Satuan Kecepatan",
  description: "Jurnal Sastra dan Catatan Mandiri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${lora.variable} ${courier.variable}`}>
      <body>
        <div className="masthead-wrapper">
          <header className="masthead">
            <h1 className="masthead-title">
              <Link href="/">◕ SATUAN KECEPATAN</Link>
            </h1>
          </header>
        </div>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <p className="footer-text">
            © 2026 SATUAN KECEPATAN ◕ @satuankecepatan on Instagram ◕ <Link href="/tarot" style={{ textDecoration: "underline" }}>Tarot Harian</Link>
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
