import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/data";
import { TrendingUp } from "lucide-react";

const TrendingSection = () => {
  return (
    <section className="py-14 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-5 h-5 text-foreground" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Tendances
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: large featured */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArticleCard article={articles[2]} index={0} />
          </motion.div>

          {/* Right: compact list */}
          <div className="flex flex-col">
            {articles.slice(0, 5).map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={i}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
