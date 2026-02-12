// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background pt-32 pb-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] bg-accent-cyan/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-[400px] w-[400px] bg-accent-purple/5 blur-[100px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-accent-cyan font-bold tracking-[0.4em] uppercase text-xs">
              Mission Briefing
            </span>
            <h1 className="font-serif text-6xl md:text-8xl mt-6 leading-tight text-white">
              Intelligence <br />
              <span className="text-zinc-500 italic">through</span> Imagery.
            </h1>
            <p className="mt-8 text-xl text-zinc-400 leading-relaxed max-w-xl">
              JSONDreams is an AI-first media brand dedicated to declassifying
              history and geopolitics through high-fidelity cinematic
              storytelling.
            </p>
          </div>
          <div className="relative aspect-square rounded-2xl border border-white/10 overflow-hidden bg-zinc-900 group">
            <Image
              src="/jsondreams.jpeg"
              alt="JSONDreams Astronaut"
              fill
              className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>

        {/* Core Values / Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl">
            <div className="h-12 w-12 rounded-full bg-accent-cyan/20 flex items-center justify-center mb-6">
              <span className="text-accent-cyan text-xl">◈</span>
            </div>
            <h3 className="text-xl font-serif text-white mb-4">
              Meticulous Accuracy
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every reel starts with deep-dive research. We cross-reference
              historical archives to ensure our AI simulations respect the
              gravity of the truth.
            </p>
          </div>

          <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl md:mt-12">
            <div className="h-12 w-12 rounded-full bg-accent-purple/20 flex items-center justify-center mb-6">
              <span className="text-accent-purple text-xl">⌬</span>
            </div>
            <h3 className="text-xl font-serif text-white mb-4">
              Neural Narrative
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We don&apos;t just prompt; we architect. Using advanced workflows,
              we create consistent, cinematic visuals that bring forgotten
              legends back to life.
            </p>
          </div>

          <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <span className="text-white text-xl">◬</span>
            </div>
            <h3 className="text-xl font-serif text-white mb-4">
              Geopolitical Depth
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              War stories, space races, and strategic maneuvers. We focus on the
              turning points that shifted the balance of global power.
            </p>
          </div>
        </div>

        {/* The "Why" - Large Text Section */}
        <div className="max-w-4xl">
          <blockquote className="border-l-4 border-accent-cyan pl-12 py-4 my-20 italic text-3xl md:text-4xl text-white font-serif leading-snug">
            &quot;History is often taught through dry text, while the gravity of
            geopolitical shifts requires a cinematic lens. We are that
            lens.&quot;
          </blockquote>

          <div className="space-y-8 text-lg text-zinc-300">
            <p>
              The name{" "}
              <span className="text-accent-cyan font-mono">JSONDreams</span>{" "}
              represents the intersection of structured data (JSON) and the
              boundless imagination of AI (Dreams). We believe that in an age of
              information overload, the only way to truly understand the past is
              to see it with the clarity of the future.
            </p>
            <p>
              From the nuclear standoffs of the Cold War to the ancient
              mysteries of lost civilizations, our mission is to bridge the gap
              between complex strategic analysis and visual storytelling.
            </p>
          </div>
        </div>

        {/* CTA Footer for About */}
        <div className="mt-32 p-12 border border-accent-cyan/20 bg-accent-cyan/5 rounded-[40px] text-center overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-64 w-64 bg-accent-cyan/10 blur-[80px] rounded-full" />
          <h2 className="font-serif text-4xl text-white mb-6">
            Witness the History.
          </h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto text-sm uppercase tracking-widest">
            Join thousands of others watching the narrative unfold.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.youtube.com/@JSONDreams/shorts"
              className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-accent-cyan transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
