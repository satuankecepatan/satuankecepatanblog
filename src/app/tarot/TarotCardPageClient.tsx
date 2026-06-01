"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TarotCard } from "@/lib/tarotData";

interface TarotCardPageClientProps {
  card: TarotCard;
}

export default function TarotCardPageClient({ card }: TarotCardPageClientProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Get current date string in Jakarta timezone
  const getTodayString = () => {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date());
  };

  useEffect(() => {
    try {
      const today = getTodayString();
      const storedDate = localStorage.getItem("satuankecepatan_tarot_date");
      const storedFlipped = localStorage.getItem("satuankecepatan_tarot_flipped");

      if (storedDate === today && storedFlipped === "true") {
        setTimeout(() => {
          setIsFlipped(true);
        }, 0);
      } else {
        // Reset storage for a new day
        localStorage.removeItem("satuankecepatan_tarot_flipped");
        localStorage.setItem("satuankecepatan_tarot_date", today);
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  const handleFlip = () => {
    if (isFlipped) return;
    setIsFlipped(true);
    try {
      localStorage.setItem("satuankecepatan_tarot_flipped", "true");
    } catch (e) {
      console.error("Local storage write error:", e);
    }
  };

  // Helper to render card name with _word_ formatting as italicized lowercase
  const formatCardName = (name: string) => {
    const parts = name.split(/(_[^_]+_)/g);
    return parts.map((part, index) => {
      if (part.startsWith("_") && part.endsWith("_")) {
        return (
          <span key={index} className="tarot-italic-word">
            {part.slice(1, -1)}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="tarot-page-container">
      <div className="tarot-header">
        <Link href="/" className="back-link">
          ← KEMBALI
        </Link>
        <h1 className="tarot-page-title">TAROT HARIAN</h1>
        <p className="tarot-page-subtitle">
          Luangkan waktu sejenak, tenangkan pikiran, dan tarik kartu tarot hari ini.
        </p>
      </div>

      <div className="tarot-card-scene" onClick={handleFlip}>
        <div className={`tarot-card-inner ${isFlipped ? "is-flipped" : ""}`}>
          {/* Card Back */}
          <div className="tarot-card-face tarot-card-back">
            <svg
              className="tarot-card-back-pattern"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 500"
              width="100%"
              height="100%"
            >
              <rect
                width="300"
                height="500"
                rx="16"
                fill="#2A2725"
                stroke="#8C6246"
                strokeWidth="6"
              />
              {/* Inner Border */}
              <rect
                x="14"
                y="14"
                width="272"
                height="472"
                rx="10"
                fill="none"
                stroke="#8C6246"
                strokeWidth="2"
                strokeDasharray="6,4"
              />
              {/* Mandala Outer Circle */}
              <circle
                cx="150"
                cy="250"
                r="65"
                fill="none"
                stroke="#8C6246"
                strokeWidth="1"
                opacity="0.5"
              />
              {/* Mandala Rays */}
              <g stroke="#8C6246" strokeWidth="1" opacity="0.4">
                <line x1="150" y1="180" x2="150" y2="320" />
                <line x1="115" y1="215" x2="185" y2="285" />
                <line x1="80" y1="250" x2="220" y2="250" />
                <line x1="115" y1="285" x2="185" y2="215" />
              </g>
              {/* Mandala Inner Circles */}
              <circle
                cx="150"
                cy="250"
                r="45"
                fill="#2A2725"
                stroke="#8C6246"
                strokeWidth="1.5"
              />
              <circle
                cx="150"
                cy="250"
                r="35"
                fill="none"
                stroke="#FAF7F2"
                strokeWidth="1"
                opacity="0.3"
              />
              {/* Center Celestial Emblem: Crescent Moon and Star */}
              <path
                d="M 140 235 A 15 15 0 1 0 160 265 A 11 11 0 1 1 140 235 Z"
                fill="#FAF7F2"
              />
              {/* Stars in Background */}
              <g fill="#FAF7F2" opacity="0.6">
                {/* Top Left */}
                <circle cx="50" cy="60" r="2" />
                <polygon points="50,45 52,50 57,50 53,53 55,58 50,55 45,58 47,53 43,50 48,50" fill="#8C6246" />
                {/* Top Right */}
                <circle cx="250" cy="60" r="2" />
                <polygon points="250,45 252,50 257,50 253,53 255,58 250,55 245,58 247,53 243,50 248,50" fill="#8C6246" />
                {/* Bottom Left */}
                <circle cx="50" cy="440" r="2" />
                <polygon points="50,425 52,430 57,430 53,433 55,438 50,435 45,438 47,433 43,430 48,430" fill="#8C6246" />
                {/* Bottom Right */}
                <circle cx="250" cy="440" r="2" />
                <polygon points="250,425 252,430 257,430 253,433 255,438 250,435 245,438 247,433 243,430 248,430" fill="#8C6246" />
                {/* Tiny Random Dots */}
                <circle cx="90" cy="120" r="1" opacity="0.3" />
                <circle cx="210" cy="120" r="1" opacity="0.3" />
                <circle cx="70" cy="200" r="1" opacity="0.3" />
                <circle cx="230" cy="200" r="1" opacity="0.3" />
                <circle cx="70" cy="300" r="1" opacity="0.3" />
                <circle cx="230" cy="300" r="1" opacity="0.3" />
                <circle cx="90" cy="380" r="1" opacity="0.3" />
                <circle cx="210" cy="380" r="1" opacity="0.3" />
              </g>
            </svg>
            <div className="tarot-card-tap-instruction">
              <span>TARIK KARTU</span>
            </div>
          </div>

          {/* Card Front */}
          <div className="tarot-card-face tarot-card-front">
            <Image
              src={`/media/tarot/${card.id}.png`}
              alt={card.name.replace(/_/g, "")}
              fill
              sizes="(max-width: 600px) 280px, 280px"
              className="tarot-card-image"
              priority
            />
          </div>
        </div>
      </div>

      <div className={`tarot-details-section ${isFlipped ? "is-visible" : ""}`}>
        <h2 className="tarot-card-name">{formatCardName(card.name)}</h2>

        <div className="tarot-interpretations-grid">
          <div className="tarot-column positive-col">
            <h3 className="tarot-column-header">TAFSIRAN POSITIF</h3>
            <p className="tarot-interpretation-text">{card.positive}</p>
          </div>
          <div className="tarot-column negative-col">
            <h3 className="tarot-column-header">TAFSIRAN NEGATIF</h3>
            <p className="tarot-interpretation-text">{card.negative}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
