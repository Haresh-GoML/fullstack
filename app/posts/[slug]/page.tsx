import posts from "@/data/posts.json";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main>
      <h1>{post.title}</h1>

      <p>
        By {post.author} · {post.date}
      </p>

      <p>{post.content}</p>
    </main>
  );
}