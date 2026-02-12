import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl tracking-tighter hover:text-accent transition-colors"
        >
          <span className="text-orange-400">JSON</span><span className="text-accent">Dreams</span>
        </Link>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
          <Link href="/blog" className="hover:text-white transition-colors">
            Stories
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            Mission
          </Link>
        </div>
      </div>
    </nav>
  );
}
