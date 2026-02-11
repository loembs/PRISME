import { useState } from "react";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/data";
import { categories } from "@/lib/types";

const ArticleGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>("À la une");

  const filteredArticles =
    activeCategory === "À la une"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Les articles de la rédaction
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-0 overflow-x-auto pb-4 mb-8 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {filteredArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-sm">
            Aucun article dans cette catégorie pour le moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleGrid;
