import Link from "next/link";
import posts from "@/data/posts.json";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Latest Articles</h1>
        <p>Explore my latest articles and tutorials.</p>
      </section>

      <section className="posts-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <h2>{post.title}</h2>

            <p className="excerpt">{post.excerpt}</p>

            <p className="post-meta">
              By {post.author} · {post.date}
            </p>

            <Link
              href={`/posts/${post.slug}`}
              className="read-more"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}