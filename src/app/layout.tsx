import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import Link from "next/link";
import "katex/dist/katex.min.css";
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
  title: "Satuan Kecepatan",
  description: "5:3 — 29:51 — 6:114 — 45:6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dynamic date, Volume, and Issue number based on current date
  const currentDate = new Date();

  // Calculate Volume: starts on April 24, 2026 (Volume 1)
  let volumeNum = currentDate.getFullYear() - 2026 + 1;
  const month = currentDate.getMonth(); // 0-11
  const date = currentDate.getDate();
  if (month < 3 || (month === 3 && date < 24)) {
    volumeNum--;
  }
  if (volumeNum < 1) volumeNum = 1;

  // Convert volumeNum to Roman numeral
  const toRoman = (num: number): string => {
    const romanMap: { [key: number]: string } = {
      1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
      6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X"
    };
    return romanMap[num] || num.toString();
  };
  const volumeRoman = toRoman(volumeNum);

  // Calculate No.: starts on April (No. 01)
  let noNum = 1;
  if (month >= 3) {
    noNum = month - 3 + 1;
  } else {
    noNum = month + 9 + 1;
  }
  const noFormatted = noNum.toString().padStart(2, "0");

  const days = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
  const months = [
    "JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI",
    "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"
  ];

  const dayName = days[currentDate.getDay()];
  const dateNum = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const yearNum = currentDate.getFullYear();
  const editionDate = `${dayName}, ${dateNum} ${monthName} ${yearNum}`;

  return (
    <html lang="id" className={`${playfair.variable} ${lora.variable} ${courier.variable}`}>
      <body>
        <div className="masthead-wrapper">
          <header className="masthead">
            <h1 className="masthead-title">
              <Link href="/">Satuan Kecepatan</Link>
            </h1>
            <p className="masthead-tagline">5:3 — 29:51 — 6:114 — 45:6</p>
            <div className="masthead-info">
              <div className="masthead-info-left" suppressHydrationWarning>Volume {volumeRoman} / No. {noFormatted}</div>
              <div className="masthead-info-center">@satuankecepatan</div>
              <div className="masthead-info-right" suppressHydrationWarning>{editionDate}</div>
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
