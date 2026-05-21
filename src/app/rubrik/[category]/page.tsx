import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSortedPostsData, getCategoryDisplayName, slugifyCategory } from "@/lib/posts";
import BookshelfClient from "./BookshelfClient";

interface PageProps {
  params: Promise<{ category: string }>;
}

const VALID_SLUGS = ["esai-dan-renungan", "esei-dan-renungan", "sketsa-malam", "cerita-dan-prosa"];

export async function generateStaticParams() {
  return [
    { category: "esai-dan-renungan" },
    { category: "sketsa-malam" },
    { category: "cerita-dan-prosa" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  
  if (!VALID_SLUGS.includes(category.toLowerCase())) {
    return {
      title: "Halaman Tidak Ditemukan — Satuan Kecepatan",
    };
  }
  
  const categoryName = getCategoryDisplayName(category);
  return {
    title: `${categoryName} — Satuan Kecepatan`,
    description: `Arsip tulisan dan catatan sastra dalam rubrik ${categoryName} di jurnal Satuan Kecepatan.`,
  };
}

export default async function RubrikPage({ params }: PageProps) {
  const { category } = await params;
  const lowerCategory = category.toLowerCase();

  if (!VALID_SLUGS.includes(lowerCategory)) {
    notFound();
  }

  const categoryName = getCategoryDisplayName(category);
  const allPosts = getSortedPostsData();

  // Filter posts that belong to this category (using slugified comparison)
  const filteredPosts = allPosts.filter(
    (post) => slugifyCategory(post.category) === slugifyCategory(categoryName)
  );

  return (
    <BookshelfClient
      posts={filteredPosts}
      categoryName={categoryName}
      categorySlug={lowerCategory}
    />
  );
}
