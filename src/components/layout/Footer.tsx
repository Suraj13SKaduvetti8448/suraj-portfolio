export default function Footer() {
  return (
    <footer className="site-footer border-t border-[var(--border-main)] bg-[var(--bg-card)] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted">
        
        {/* Left */}
        <p>
          © {new Date().getFullYear()} Suraj S. Kaduvetti.  
          All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Suraj13Kaduvetti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-kaduvetti-015656193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          
          
        </div>

      </div>
    </footer>
  );
}
