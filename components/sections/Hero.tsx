export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6">
      <div className="z-10 text-center">
        <h1 className="max-w-4xl font-serif text-6xl md:text-8xl leading-[1.1]">
          We turn history into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            cinematic AI stories.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
          Where geopolitical strategy meets high-fidelity AI cinematography.
          Deep dives into the moments that defined civilizations.
        </p>
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#watch-latest"
            className="bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-105 active:scale-95"
          >
            Watch Latest
          </a>
          <button className="border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
            Read Archive
          </button>
        </div>
      </div>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
    </section>
  );
}
