// components/blog/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  youtubeId: string; // Add this to your props
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  category,
  date,
  youtubeId,
}: BlogCardProps) {
  // Fallback to hqdefault if maxres isn't available
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <Link href={`/blog/${slug}`} className="group relative block">
      {/* Cinematic Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden border border-white/10 bg-zinc-900 transition-all duration-500 group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]">
        
        {/* YouTube Image */}
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        
        {/* Play Button Icon (Visual Cue) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:border-accent-cyan group-hover:bg-accent-cyan/20">
            <svg 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              className="h-5 w-5 text-white group-hover:text-accent-cyan"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-cyan">
            {category}
          </span>
          <span className="h-px w-8 bg-white/10" />
        </div>
        
        <h3 className="font-serif text-2xl leading-tight text-white transition-colors group-hover:text-accent-cyan">
          {title}
        </h3>
        
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-600">
            {date}
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent-purple opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
            Read Intel →
          </span>
        </div>
      </div>
    </Link>
  );
}