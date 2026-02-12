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
      <div className="relative container mx-auto px-4 md:px-8 pb-12 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] bg-primary text-primary-foreground mb-6 rounded-sm">
            {heroArticle.category}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-primary-foreground tracking-tight">
            {heroArticle.title}
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            {heroArticle.excerpt}
          </p>

          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
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
