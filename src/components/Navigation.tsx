import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/config/site";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <a href="#main" className="skip-link">Skip to content</a>
      <nav className="page flex h-14 items-center justify-between" aria-label="Main">
        <a href="/" className="font-bold text-lg tracking-tight hover:text-primary transition-colors">
          {site.name}
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
          <a href={site.cv} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            CV<span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border">
          <div className="page py-3 flex flex-col">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="py-2 hover:text-primary">
                {item.name}
              </a>
            ))}
            <a href={site.cv} target="_blank" rel="noopener noreferrer" className="py-2 hover:text-primary">
              CV<span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
