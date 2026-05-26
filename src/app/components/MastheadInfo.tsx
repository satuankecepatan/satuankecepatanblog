"use client";

import { useEffect, useState } from "react";

function getMastheadData(currentDate: Date) {
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

  return { volumeRoman, noFormatted, editionDate };
}

interface MastheadInfoProps {
  initialServerDate: string;
}

export default function MastheadInfo({ initialServerDate }: MastheadInfoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dateToUse = mounted ? new Date() : new Date(initialServerDate);
  const { volumeRoman, noFormatted, editionDate } = getMastheadData(dateToUse);

  return (
    <div className="masthead-info">
      <div className="masthead-info-left">
        Volume {volumeRoman} / No. {noFormatted}
      </div>
      <div className="masthead-info-center">@satuankecepatan</div>
      <div className="masthead-info-right">
        {editionDate}
      </div>
    </div>
  );
}
