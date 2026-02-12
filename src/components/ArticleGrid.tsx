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
        {/* Sub Header & Filters */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
              Dernières vidéos
            </h2>
          </div>

          <div className="flex gap-2 p-1 bg-secondary rounded-full w-fit overflow-x-auto scrollbar-hide">
            {["À la une", "Politique", "Tendances", "Sport", "Fun"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[13px] font-bold transition-all ${activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 bg-secondary rounded-2xl border-2 border-dashed border-border/50">
            <div className="text-4xl mb-4">🎬</div>
            <p className="text-muted-foreground text-sm font-medium">
              Aucun article dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleGrid;
