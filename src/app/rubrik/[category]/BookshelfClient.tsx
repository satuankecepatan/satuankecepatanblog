"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PostData } from "@/lib/posts";

interface BookshelfClientProps {
  posts: PostData[];
  categoryName: string;
  categorySlug: string;
}

interface SpineStyle {
  bg: string;
  text: string;
  border: string;
  ornament: string;
  height: number;
  width: number;
}

function getBookSpineStyle(slug: string): SpineStyle {
  const spinePalettes = [
    { bg: "#5C2C2C", text: "#E6C687", border: "#E6C687", ornament: "❦" }, // Crimson / Gold
    { bg: "#2B3E50", text: "#FAF7F2", border: "#8C6246", ornament: "✵" }, // Navy / Cream
    { bg: "#2E4A3F", text: "#E6C687", border: "#E6C687", ornament: "❖" }, // Forest Green / Gold
    { bg: "#785935", text: "#FAF7F2", border: "#FAF7F2", ornament: "✤" }, // Leather / Cream
    { bg: "#3A3532", text: "#E6C687", border: "#E6C687", ornament: "✦" }, // Charcoal / Gold
    { bg: "#6C4375", text: "#FAF7F2", border: "#FAF7F2", ornament: "✿" }, // Plum / Cream
    { bg: "#8D4A36", text: "#FAF7F2", border: "#FAF7F2", ornament: "✪" }, // Terracotta
  ];

  let codeSum = 0;
  for (let i = 0; i < slug.length; i++) {
    codeSum += slug.charCodeAt(i);
  }
  
  const palette = spinePalettes[codeSum % spinePalettes.length];
  const height = 230 + (codeSum % 41); // Height range: 230px - 270px
  const width = 45 + (codeSum % 11);   // Width range: 45px - 55px

  return {
    ...palette,
    height,
    width,
  };
}

function formatDate(dateString: string): string {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  try {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${months[monthIndex]} ${year}`;
  } catch {
    return dateString;
  }
}

export default function BookshelfClient({ posts, categoryName, categorySlug }: BookshelfClientProps) {
  const [activePost, setActivePost] = useState<PostData | null>(null);

  // Set the first book as active by default on load
  useEffect(() => {
    if (posts.length > 0) {
      setActivePost(posts[0]);
    }
  }, [posts]);

  // Group posts into chunks of 6 (representing bookshelf levels)
  const shelves: PostData[][] = [];
  for (let i = 0; i < posts.length; i += 6) {
    shelves.push(posts.slice(i, i + 6));
  }

  // Generate active style for Reading Desk book cover
  const activeSpineStyle = activePost ? getBookSpineStyle(activePost.slug) : null;

  return (
    <div className="single-post-container" style={{ maxWidth: "1150px" }}>
      {/* Back Link */}
      <Link href="/" className="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        KEMBALI KE BERANDA
      </Link>

      {/* Header */}
      <header className="bookshelf-page-header">
        <span className="category-tag">RUBRIK UTAMA</span>
        <h1 className="bookshelf-page-title">{categoryName}</h1>
      </header>

      {posts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--muted)" }}>
            Rak buku ini kosong. Tulisan di rubrik ini sedang dirangkai oleh redaksi.
          </p>
        </div>
      ) : (
        <div className="bookshelf-container">
          {/* Bookshelf Section */}
          <div className="bookshelf-section">
            <div className="bookshelf">
              {shelves.map((shelfPosts, shelfIndex) => (
                <div key={shelfIndex} className="shelf">
                  <div className="books-row">
                    {shelfPosts.map((post) => {
                      const spineStyle = getBookSpineStyle(post.slug);
                      const isActive = activePost?.slug === post.slug;
                      return (
                        <div
                          key={post.slug}
                          className={`book-spine ${isActive ? "active" : ""}`}
                          style={{
                            "--book-width": `${spineStyle.width}px`,
                            "--book-height": `${spineStyle.height}px`,
                            "--book-bg-color": spineStyle.bg,
                            "--book-text-color": spineStyle.text,
                            "--book-border-color": spineStyle.border,
                          } as React.CSSProperties}
                          onMouseEnter={() => setActivePost(post)}
                          onClick={() => setActivePost(post)}
                        >
                          <div className="spine-border-top" />
                          <div className="spine-title-container">
                            <span className="spine-title">{post.title}</span>
                          </div>
                          <span className="spine-ornament">{spineStyle.ornament}</span>
                          <div className="spine-border-bottom" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="shelf-board" />
                  <div className="shelf-shadow" />
                </div>
              ))}
            </div>
          </div>

          {/* Reading Desk Section */}
          <div className="reading-desk-section">
            <h3 className="reading-desk-title">
              <span>Meja Baca</span>
            </h3>
            <div className="reading-desk">
              {activePost && activeSpineStyle ? (
                <div className="open-book" key={activePost.slug}>
                  {/* Left Side: Illustrated Cover */}
                  <div className="open-book-left">
                    <div
                      className="book-preview-cover"
                      style={{
                        "--book-bg-color": activeSpineStyle.bg,
                        "--book-text-color": activeSpineStyle.text,
                      } as React.CSSProperties}
                    >
                      <span className="preview-cover-category">{categoryName}</span>
                      <h4 className="preview-cover-title">{activePost.title}</h4>
                      <span className="preview-cover-ornament">{activeSpineStyle.ornament}</span>
                    </div>
                  </div>

                  {/* Right Side: Excerpt & Read Link */}
                  <div className="open-book-right">
                    <div className="preview-meta">
                      Diterbitkan pada {formatDate(activePost.date)}
                    </div>
                    <h2 className="preview-title">{activePost.title}</h2>
                    <p className="preview-excerpt">“{activePost.excerpt}”</p>
                    <Link href={`/posts/${activePost.slug}`} className="read-more-btn">
                      BUKA LEMBARAN BACAAN →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="desk-empty-state">
                  Pilih sebuah buku dari rak untuk meletakkannya di meja baca...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
