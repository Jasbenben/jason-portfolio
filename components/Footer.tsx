"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <div className="text-secondary text-sm font-mono">
          © {currentYear} Jason Bennett
        </div>

        {/* Right - Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-secondary hover:text-primary transition-colors text-sm font-mono uppercase tracking-wider"
          >
            ↑ Home
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

