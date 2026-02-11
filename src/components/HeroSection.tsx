import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroArticle } from "@/lib/data";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroArticle.image}
          alt={heroArticle.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pb-12 md:pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary-foreground text-foreground mb-5">
            {heroArticle.category}
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-5 text-primary-foreground tracking-tight">
            {heroArticle.title}
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/60 mb-8 max-w-2xl leading-relaxed">
            {heroArticle.excerpt}
          </p>

          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary-foreground uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            Lire l'article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
