import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import Link from "next/link";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import MastheadInfo from "@/app/components/MastheadInfo";

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
  description: "5:3 — 29:51 — 6:114 — 45:6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialServerDate = new Date().toISOString();

  return (
    <html lang="id" className={`${playfair.variable} ${lora.variable} ${courier.variable}`}>
      <body>
        <div className="masthead-wrapper">
          <header className="masthead">
            <h1 className="masthead-title">
              <Link href="/">Satuan Kecepatan</Link>
            </h1>
            <p className="masthead-tagline">5:3 — 29:51 — 6:114 — 45:6</p>
            <MastheadInfo initialServerDate={initialServerDate} />
            <nav className="masthead-nav">
              <Link href="/rubrik/esai-dan-renungan" className="nav-link">Esai & Renungan</Link>
              <span className="nav-separator">•</span>
              <Link href="/rubrik/sketsa-malam" className="nav-link">Sketsa Malam</Link>
              <span className="nav-separator">•</span>
              <Link href="/rubrik/cerita-dan-prosa" className="nav-link">Cerita dan Prosa</Link>
            </nav>
          </header>
        </div>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-col">
              <h4>Satuan Kecepatan</h4>
              <div className="footer-socials">
                <a
                  href="https://instagram.com/satuankecepatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Instagram: @satuankecepatan"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://github.com/satuankecepatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub: @satuankecepatan"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Rubrik Utama</h4>
              <ul>
                <li><Link href="/rubrik/esai-dan-renungan">Esai & Renungan</Link></li>
                <li><Link href="/rubrik/sketsa-malam">Sketsa Malam</Link></li>
                <li><Link href="/rubrik/cerita-dan-prosa">Cerita dan Prosa</Link></li>
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
