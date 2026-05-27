import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData, getSortedPostsData, getCategoryDisplayName } from "@/lib/posts";

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
          ← KEMBALI KE BERANDA
        </Link>

        <header className="single-post-header">
          <h1 className="single-post-title">{postData.title}</h1>
          <div className="post-meta">
            {formatDate(postData.date).toUpperCase()} ◕ {getCategoryDisplayName(postData.category).toUpperCase()}
          </div>
        </header>

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
