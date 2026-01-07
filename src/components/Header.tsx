import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-2xl font-semibold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Horizon
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#a-propos"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#services"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galerie"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#horaires"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild>
            <a href="tel:+41244714808" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#a-propos"
              className="block text-sm text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              className="block text-sm text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#galerie"
              className="block text-sm text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#horaires"
              className="block text-sm text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#contact"
              className="block text-sm text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
            <Link
              to={otherLangPath}
              className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full">
              <a href="tel:+41244714808" className="flex items-center gap-2 justify-center">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
