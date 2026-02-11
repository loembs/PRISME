import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  "Afrique",
  "International",
  "Environnement",
  "Technologie",
  "Culture",
  "Santé",
  "Économie",
  "Sport",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Prisme.
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <a
              href="#"
              className="hidden md:inline-flex px-4 py-1.5 text-[13px] font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              S'abonner
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pb-3">
                <input
                  type="text"
                  placeholder="Rechercher un article, un sujet..."
                  className="w-full px-4 py-2.5 bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none text-sm border border-border"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border last:border-0"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="mt-3 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground text-center"
              >
                S'abonner
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
