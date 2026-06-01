import { Metadata } from "next";
import { getCardOfTheDay } from "@/lib/tarotData";
import TarotCardPageClient from "./TarotCardPageClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tarot Harian - Satuan Kecepatan",
  description: "Tarik kartu tarot harian Anda dan baca petunjuk positif serta negatif hari ini.",
};

export default function TarotPage() {
  const card = getCardOfTheDay();
  return <TarotCardPageClient card={card} />;
}
