const footerLinks = {
  "Catégories": ["Afrique", "International", "Environnement", "Technologie", "Culture", "Sport"],
  "Formats": ["Articles", "Documentaires", "Podcasts", "Vidéos"],
  "À propos": ["La rédaction", "Nous rejoindre", "Contact", "Mentions légales"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-foreground">
              Prisme.
            </span>
            <p className="text-xs text-muted-foreground mt-3 max-w-xs leading-relaxed">
              Le média qui éclaire l'actualité africaine sous tous ses angles.
            </p>
            <p className="text-[11px] text-muted-foreground/60 mt-2">
              Édition africaine
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">
            © 2026 Prisme. Tous droits réservés.
          </span>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">CGU</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
