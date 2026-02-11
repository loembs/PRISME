import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        "À Propos": [
            { label: "Notre Mission", href: "/about" },
            { label: "L'Équipe", href: "/team" },
            { label: "Carrières", href: "/careers" },
            { label: "Contact", href: "/contact" },
        ],
        "Catégories": [
            { label: "Documentaires", href: "/category/documentary" },
            { label: "Actualités", href: "/category/news" },
            { label: "Nature", href: "/category/nature" },
            { label: "Culture", href: "/category/culture" },
        ],
        "Légal": [
            { label: "Conditions d'utilisation", href: "/terms" },
            { label: "Politique de confidentialité", href: "/privacy" },
            { label: "Cookies", href: "/cookies" },
            { label: "Mentions légales", href: "/legal" },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    ];

    return (
        <footer className="w-full bg-background border-t border-border/40 mt-16">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1770812136/PRSME_lc1kwf.png"
                                alt="Prisme"
                                className="h-60 lg:h-60 w-auto object-contain transition-all duration-300"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground mb-6 max-w-md">
                            Votre source d'information et de documentaires sur l'Afrique.
                            Découvrez des histoires qui comptent, racontées par ceux qui les vivent.
                        </p>

                        {/* Newsletter */}
                        <div className="flex gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 bg-secondary/50 border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                S'abonner
                            </button>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{title}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Prisme Media. Tous droits réservés.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
