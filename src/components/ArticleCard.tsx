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

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group cursor-pointer hover-lift"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-secondary">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest bg-primary text-primary-foreground">
            {article.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-1.5 bg-primary-foreground">
            <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-base font-bold text-foreground group-hover:opacity-70 transition-opacity line-clamp-2 leading-snug mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
          {article.excerpt}
        </p>
        <span className="text-xs text-muted-foreground">
          {article.author} · {article.readTime}
        </span>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
