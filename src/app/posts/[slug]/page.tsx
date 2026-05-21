import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData, getSortedPostsData } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
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

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    const postData = await getPostData(slug);

    return (
      <article className="single-post-container">
        <Link href="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          KEMBALI KE BERANDA
        </Link>

        <header className="single-post-header">
          <span className="category-tag">{postData.category}</span>
          <h1 className="single-post-title">{postData.title}</h1>
          <div className="post-meta">
            DITERBITKAN PADA {formatDate(postData.date).toUpperCase()}
          </div>
        </header>

        {postData.coverImage && (
          <div className="single-post-image-wrapper">
            <Image
              src={postData.coverImage}
              alt={postData.title}
              fill
              priority
              className="single-post-image"
            />
          </div>
        )}

        <div 
          className="single-post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
        />
      </article>
    );
  } catch {
    notFound();
  }
}
