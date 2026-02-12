/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import VideoEmbed from "@/components/blog/VideoEmbed";
import { Metadata } from "next";
import TOC from "@/components/blog/TOC";
import { MDXRemote } from "next-mdx-remote/rsc"; // Import the remote renderer
import VideoSchema from "@/components/blog/VideoSchema";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} | JSONDreams`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // Define custom styles/components for MDX elements
  const mdxComponents = {
    h2: (props: any) => (
      <h2
        {...props}
        className="mt-12 mb-6 font-serif text-3xl text-accent-cyan"
      />
    ),
    h3: (props: any) => (
      <h3 {...props} className="mt-8 mb-4 font-serif text-2xl text-white" />
    ),
    p: (props: any) => (
      <p {...props} className="mb-6 text-zinc-300 leading-relaxed text-lg" />
    ),
    blockquote: (props: any) => (
      <blockquote
        {...props}
        className="my-10 border-l-2 border-accent-purple bg-accent-purple/5 p-8 italic text-white font-serif text-xl shadow-[0_0_20px_rgba(168,85,247,0.1)]"
      />
    ),
    strong: (props: any) => (
      <strong {...props} className="text-white font-bold text-accent-cyan/90" />
    ),
    ol: (props: any) => (
      <ol
        {...props}
        className="list-decimal list-inside space-y-4 mb-8 text-zinc-300"
      />
    ),
    li: (props: any) => (
      <li {...props} className="marker:text-accent-cyan marker:font-bold" />
    ),
  };

  return (
    <article className="relative mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-[1fr_250px] lg:gap-16">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-accent-cyan/5 blur-[120px]" />

      <div>
        <header className="mb-12">
          <span className="text-accent-cyan font-bold tracking-[0.3em] uppercase text-xs">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif text-5xl lg:text-7xl leading-tight text-white">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-4 text-zinc-500 text-sm font-medium">
            <span>{post.readingTime} MIN READ</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>{post.date}</span>
          </div>
        </header>

        <VideoEmbed id={post.youtubeId} />

        {/* The MDX Renderer */}
        <div className="mt-12">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-32 border-l border-white/5 pl-8">
          <TOC selector="article" />
        </div>
      </aside>
      <VideoSchema post={post} />
    </article>
  );
}
