import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-14 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary text-primary-foreground p-8 md:p-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Restez informé
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-8">
              Recevez chaque matin l'essentiel de l'actualité africaine, analysé et décrypté par notre rédaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-2.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none text-sm"
              />
              <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-foreground text-foreground text-sm font-bold hover:opacity-90 transition-opacity">
                S'abonner
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
