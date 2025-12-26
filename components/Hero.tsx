import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      
      {/* 1. Background Lighting Effects (The "Speed" Streaks) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: The Copy */}
        <div className="text-left space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>
            Fastest Dev Shop in 2025
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Your Website. <br />
            Live in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">24 Hours.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Stop waiting weeks for developers. We build modern, mobile-friendly websites deployed in just one business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* The Orange Button from your Banner */}
            <a 
              href="#lead" 
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg text-white font-bold text-lg shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300 text-center"
            >
              Get My Website Tomorrow
            </a>
            
            <button className="px-8 py-4 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all font-semibold text-gray-300">
              View Samples
            </button>
          </div>

          {/* Social Proof Text */}
          <p className="text-sm text-gray-500 pt-2">
            Trusted by 100+ startups • 100% Money-back guarantee
          </p>
        </div>

        {/* RIGHT COLUMN: The Visual (CSS Laptop) */}
        <div className="relative hidden lg:block perspective-1000">
          {/* This creates a CSS "Laptop" that tilts slightly - 3D effect */}
          <div className="relative w-full aspect-video bg-gray-900 rounded-t-xl border-t border-l border-r border-gray-700 shadow-2xl transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-500">
            
            {/* Screen Content */}
            <div className="absolute inset-1 bg-black rounded-lg overflow-hidden flex items-center justify-center border border-gray-800">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-gray-500 font-mono text-sm">Deploying project...</p>
                {/* Loading Bar */}
                <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
                  <div className="w-2/3 h-full bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Laptop Base (Keyboard area) */}
            <div className="absolute -bottom-4 left-[-2%] w-[104%] h-4 bg-gray-800 rounded-b-xl shadow-xl border-t border-gray-900" />
            
            {/* Glow behind laptop */}
            <div className="absolute -inset-10 bg-blue-500/20 blur-3xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}