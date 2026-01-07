import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-semibold">Horizon</span>
              <span className="text-xs tracking-widest text-background/70">
                {t.footer.tagline}
              </span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+41244714808" className="hover:text-background transition-colors">
                  +41 24 471 48 08
                </a>
              </li>
              <li>
                <a href="mailto:info@horizonbois.ch" className="hover:text-background transition-colors">
                  info@horizonbois.ch
                </a>
              </li>
              <li>
                <p>
                  Route Boeuferrant-Nord 43<br />
                  1870 Monthey, CH
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4">Social</h3>
            <a
              href="https://www.facebook.com/Horizon-bois-132733920171800"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © {currentYear} Horizon Construction Bois. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
