import Link from "next/link";
import { getSortedPostsWithHtml, getCategoryDisplayName } from "@/lib/posts";

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

export default async function Home() {
  const allPosts = await getSortedPostsWithHtml();

  if (allPosts.length === 0) {
    return (
      <div className="empty-state">
        <p>Belum ada warta yang diterbitkan.</p>
      </div>
    );
  }

  return (
    <div className="posts-list">
      {allPosts.map((post, index) => (
        <div key={post.slug}>
          {index > 0 && <div className="post-separator">◕</div>}
          <article className="post-item">
            <header className="post-header">
              <h2 className="post-title">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="post-meta">
                {formatDate(post.date).toUpperCase()} ◕ {getCategoryDisplayName(post.category).toUpperCase()}
              </div>
            </header>
            <div
              className="post-preview"
              dangerouslySetInnerHTML={{ __html: post.previewHtml || "" }}
            />
            <div className="read-more-wrapper">
              <Link href={`/posts/${post.slug}`} className="read-more-btn">
                BACA SELENGKAPNYA
              </Link>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
