import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO START (Code Only - No Image File) */}
        <Logo />
        {/* LOGO END */}

        <a
          href="#pricing"
          className="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-2 rounded-full text-sm font-medium transition-all"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
