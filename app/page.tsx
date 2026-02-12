// app/page.tsx
import Hero from "@/components/sections/Hero"; // As provided in previous response
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <Hero />
      <section
        className="mx-auto max-w-7xl px-6 py-24 border-t border-white/5"
        id="watch-latest"
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl">Latest Intelligence</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs mt-2">
              New Cinematic Stories
            </p>
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}
