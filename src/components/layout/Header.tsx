import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b bg-[var(--bg-card)] border-[var(--border-main)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="font-semibold text-lg section-title">
          Suraj Kaduvetti
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
