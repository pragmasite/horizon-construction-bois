import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.contact.phone}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  +41 24 471 48 08
                </p>
                <p className="text-muted-foreground text-sm">
                  +41 79 464 28 23
                </p>
                <Button asChild size="sm" className="mt-4">
                  <a href="tel:+41244714808">{t.contact.callNow}</a>
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.contact.email}
                </h3>
                <p className="text-muted-foreground text-sm">
                  info@horizonbois.ch
                </p>
                <Button asChild size="sm" variant="outline" className="mt-4">
                  <a href="mailto:info@horizonbois.ch">
                    {t.hero.sendEmail}
                  </a>
                </Button>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.contact.address}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Route Boeuferrant-Nord 43
                  <br />
                  1870 Monthey, Suisse
                </p>
                <Button asChild size="sm" variant="outline" className="mt-4">
                  <a
                    href="https://maps.google.com/?q=46.277016,6.958397"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contact.cta}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-medium h-full min-h-[400px]"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.9373844329384!2d6.958397!3d46.277016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3f1e1e1e1e1d%3A0x5d8e8e8e8e8e8e8e!2sRoute%20Boeuferrant-Nord%2043%2C%201870%20Monthey!5e0!3m2!1sen!2sch!4v1234567890"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
