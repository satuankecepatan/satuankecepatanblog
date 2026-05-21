import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
  title: "Satuan Kecepatan — Catatan Pinggir Hari-Hari yang Lambat",
  description: "Sebuah blog bertema koran tua bertempo lambat. Esei, sketsa, dan catatan harian tentang waktu, kesunyian, dan apa-apa yang tertinggal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hardcoded date fits the stationary newspaper edition styling and avoids client hydration mismatches
  const editionDate = "JUMAT, 22 MEI 2026";

  return (
    <html lang="id" className={`${playfair.variable} ${lora.variable} ${courier.variable}`}>
      <body>
        <div className="masthead-wrapper">
          <header className="masthead">
            <h1 className="masthead-title">
              <Link href="/">Satuan Kecepatan</Link>
            </h1>
            <p className="masthead-tagline">“Tentang waktu yang melesat dan apa-apa yang tertinggal”</p>
            <div className="masthead-info">
              <div className="masthead-info-left">Volume I / No. 01</div>
              <div className="masthead-info-center">EDISI PERDANA</div>
              <div className="masthead-info-right">{editionDate}</div>
            </div>
          </header>
        </div>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-col">
              <h4>Satuan Kecepatan</h4>
              <p>Sebuah jurnal harian indie bercorak koran klasik. Mencatat sunyi, merayakan lambat, dan merawat ingatan di tengah rimba kecepatan modern.</p>
            </div>
            <div className="footer-col">
              <h4>Rubrik Utama</h4>
              <ul>
                <li><Link href="/">Esei & Renungan</Link></li>
                <li><Link href="/">Sketsa Malam</Link></li>
                <li><Link href="/">Catatan Harian</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Tentang Redaksi</h4>
              <p>Diterbitkan secara mandiri dari sudut kamar yang tenang, diiringi rintik hujan dan aroma cangkir kopi yang mendingin.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 Satuan Kecepatan. Seluruh Hak Cipta Dilindungi.</div>
            <div>Dicetak Secara Mandiri di Ruang Sunyi</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
