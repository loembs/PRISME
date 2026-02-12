import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  index: number;
  variant?: "default" | "compact";
}

const ArticleCard = ({ article, index, variant = "default" }: ArticleCardProps) => {
  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="group flex gap-4 items-start cursor-pointer py-4 border-b border-border last:border-0"
      >
        <span className="text-3xl font-bold text-muted-foreground/20 leading-none mt-0.5 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">
            {article.category}
          </span>
          <h3 className="text-[15px] font-bold text-foreground group-hover:opacity-70 transition-opacity line-clamp-2 leading-snug">
            {article.title}
          </h3>
          <span className="text-xs text-muted-foreground mt-1.5 block">
            {article.author} · {article.readTime}
          </span>
        </div>
      </motion.article>
    );
  }

  const isVertical = article.orientation === "vertical";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`group cursor-pointer flex flex-col gap-3 ${article.featured ? "col-span-full md:col-span-2 row-span-2" : ""}`}
    >
      <div
        className="relative overflow-hidden bg-secondary rounded-xl aspect-video transition-all duration-500 shadow-sm group-hover:shadow-xl"
      >
        {/* Background Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:opacity-100" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-primary text-primary-foreground rounded-full">
            {article.category}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md border border-white/10">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-white tabular-nums">
              {article.duration}
            </span>
          </div>
        </div>

        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl group-hover:bg-primary transition-all duration-300"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </motion.div>
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-left">
          <h3 className={`font-bold text-white leading-tight mb-2 group-hover:text-white/90 transition-colors ${article.featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
            }`}>
            {article.title}
          </h3>
          <div className="flex items-center gap-3 text-[11px] font-bold text-white/60">
            <div className="flex items-center gap-1">
              <span className="opacity-70">👁</span>
              <span>{article.views}</span>
            </div>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 px-1">
          {article.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default ArticleCard;
