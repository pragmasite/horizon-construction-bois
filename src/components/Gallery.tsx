import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Gallery images with 1-3 word descriptions
  const images = [
    {
      src: "/images/h1.png",
      alt_fr: "Chalet bois moderne",
      alt_de: "Modernes Holzchalet",
    },
    {
      src: "/images/h2.png",
      alt_fr: "Construction alpine",
      alt_de: "Alpine Konstruktion",
    },
    {
      src: "/images/h4.png",
      alt_fr: "Pergola terrasse",
      alt_de: "Terrassen-Pergola",
    },
    {
      src: "/images/h5.jpg",
      alt_fr: "Fenêtres bois intérieur",
      alt_de: "Holzfenster innen",
    },
  ];

  const getAlt = (image: (typeof images)[0]) => {
    return lang === "fr" ? image.alt_fr : image.alt_de;
  };

  return (
    <section id="galerie" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={getAlt(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{getAlt(image)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
          >
            <img
              src={images[selectedIndex].src}
              alt={getAlt(images[selectedIndex])}
              className="w-full h-full object-contain rounded-2xl"
            />

            {/* Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-2xl">
              <p className="text-white text-lg font-medium">
                {getAlt(images[selectedIndex])}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
