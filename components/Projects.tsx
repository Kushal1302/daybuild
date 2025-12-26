import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      domain: "stackmates-v1.vercel.app", // Your portfolio
      title: "StackMates",
      description: "A community platform for full-stack developers.",
      tags: ["Next.js", "Social", "Beta"],
    },
    {
      domain: "vishwakarma-engineers.vercel.app", // Your client site
      title: "Vishwakarma Engineers",
      description: "Industrial manufacturing portfolio and catalog.",
      tags: ["Business", "Catalog", "Live"],
    },
    {
      domain: "intervueiq.vercel.app", // Example 3
      title: "IntervueIQ",
      description: "AI Interview Scheduler.",
      tags: ["AI", "Interview", "Scheduler"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built in 24 Hours
          </h2>
          <p className="text-gray-400">
            Real projects deployed at record speeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <a
              key={i}
              href={`https://${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative perspective-1000"
            >
              {/* 3D Card Effect Container */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 ease-out">
                {/* 1. Browser Address Bar (The "SEO" Header) */}
                <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 bg-black/50 rounded text-[10px] text-gray-500 px-2 py-1 font-mono truncate text-center">
                    {p.domain}
                  </div>
                </div>

                {/* 2. Automatic Screenshot Area */}
                <div className="relative aspect-[4/3] bg-black group-hover:opacity-90 transition-opacity">
                  {/* We use thum.io to auto-generate the image from the URL */}
                  {/* Note: In production, you might want a paid service or your own scraper, but this works for free demos */}
                  <img
                    src={`https://image.thum.io/get/width/800/crop/600/noanimate/https://${p.domain}`}
                    alt={p.title}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      Visit Site ↗
                    </span>
                  </div>
                </div>

                {/* 3. Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
