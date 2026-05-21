import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

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

export default function Home() {
  const allPosts = getSortedPostsData();

  if (allPosts.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "5rem 0" }}>
        <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontStyle: "italic" }}>
          Belum ada warta yang diterbitkan.
        </p>
      </div>
    );
  }

  const headlinePost = allPosts[0];
  const secondaryPosts = allPosts.slice(1, 6);

  return (
    <>
      {/* Headline / Lead Post */}
      <section className="headline-section">
        <div className="headline-image-wrapper">
          {headlinePost.coverImage ? (
            <Image
              src={headlinePost.coverImage}
              alt={headlinePost.title}
              fill
              priority
              className="headline-image"
            />
          ) : (
            <div style={{ width: "100%", height: "100%", backgroundColor: "#EFECE6" }} />
          )}
        </div>
        <div className="headline-content">
          <span className="category-tag">{headlinePost.category}</span>
          <h2 className="headline-title">
            <Link href={`/posts/${headlinePost.slug}`}>
              {headlinePost.title}
            </Link>
          </h2>
          <div className="post-meta">
            DITERBITKAN PADA {formatDate(headlinePost.date).toUpperCase()}
          </div>
          <p className="headline-excerpt">{headlinePost.excerpt}</p>
          <Link href={`/posts/${headlinePost.slug}`} className="read-more-btn">
            BACA SELENGKAPNYA →
          </Link>
        </div>
      </section>

      {/* Grid Section for Recent 5 Posts */}
      {secondaryPosts.length > 0 && (
        <section>
          <h3 className="news-grid-title">Warta Lainnya</h3>
          <div className="news-grid">
            {secondaryPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <div className="post-card-image-wrapper">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="post-card-image"
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#EFECE6" }} />
                  )}
                </div>
                <span className="category-tag" style={{ fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                  {post.category}
                </span>
                <h4 className="post-card-title">
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                <div className="post-meta" style={{ marginBottom: "1rem", paddingBottom: "0.5rem" }}>
                  {formatDate(post.date).toUpperCase()}
                </div>
                <p className="post-card-excerpt">{post.excerpt}</p>
                <Link href={`/posts/${post.slug}`} className="read-more-btn" style={{ fontSize: "0.8rem" }}>
                  BACA →
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
