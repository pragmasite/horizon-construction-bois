import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-muted rounded-xl p-8 hover:shadow-medium transition-all duration-300 border border-border hover:border-accent/50"
            >
              <div className="h-12 w-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                <div className="h-6 w-6 bg-accent rounded-md" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
