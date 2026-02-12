// app/blog/page.tsx
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogListing() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-32">
      <header className="mb-20">
        <h1 className="font-serif text-5xl md:text-6xl">The Archives</h1>
        <p className="mt-4 text-zinc-500 uppercase tracking-widest text-sm">
          Strategic Narratives & Cinematic Case Studies
        </p>
      </header>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
