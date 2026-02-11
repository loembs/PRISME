export interface Article {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
}

export const MOCK_ARTICLES: Article[] = [
    {
        id: "1",
        title: "Le Sénégal lance un nouveau programme de transformation digitale",
        excerpt: "Le gouvernement sénégalais annonce un investissement majeur dans les infrastructures numériques pour accélérer la transformation digitale du pays.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        category: "Technologie",
        author: "Aminata Diallo",
        date: "11 Fév 2026",
        readTime: "5 min"
    },
    {
        id: "2",
        title: "La Grande Muraille Verte : Un espoir pour le Sahel",
        excerpt: "Le projet ambitieux de reforestation avance malgré les défis climatiques et économiques de la région.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
        category: "Environnement",
        author: "Moussa Sow",
        date: "10 Fév 2026",
        readTime: "8 min"
    },
    {
        id: "3",
        title: "L'économie africaine en pleine croissance malgré les défis mondiaux",
        excerpt: "Les experts prévoient une croissance soutenue pour plusieurs pays africains dans les années à venir.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000",
        category: "Économie",
        author: "Fatou Ndiaye",
        date: "9 Fév 2026",
        readTime: "6 min"
    },
    {
        id: "4",
        title: "Le football sénégalais brille sur la scène internationale",
        excerpt: "Les Lions de la Téranga continuent d'impressionner avec leurs performances exceptionnelles.",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000",
        category: "Sports",
        author: "Ibrahima Fall",
        date: "8 Fév 2026",
        readTime: "4 min"
    },
    {
        id: "5",
        title: "La médecine traditionnelle africaine reconnue par l'OMS",
        excerpt: "L'Organisation Mondiale de la Santé reconnaît officiellement l'importance de la médecine traditionnelle africaine.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000",
        category: "Santé",
        author: "Dr. Aïssatou Diop",
        date: "7 Fév 2026",
        readTime: "7 min"
    },
    {
        id: "6",
        title: "Le festival de musique de Dakar attire des artistes du monde entier",
        excerpt: "La capitale sénégalaise devient un hub culturel majeur avec son festival annuel de musique.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
        category: "Culture",
        author: "Cheikh Dieng",
        date: "6 Fév 2026",
        readTime: "5 min"
    },
    {
        id: "7",
        title: "Sommet de l'Union Africaine : Les leaders discutent de l'avenir du continent",
        excerpt: "Les chefs d'État africains se réunissent pour discuter des enjeux majeurs de développement et de coopération.",
        image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1000",
        category: "Afrique",
        author: "Mariama Sy",
        date: "5 Fév 2026",
        readTime: "10 min"
    },
    {
        id: "8",
        title: "Les relations diplomatiques entre l'Afrique et l'Europe se renforcent",
        excerpt: "De nouveaux accords de partenariat sont signés pour renforcer la coopération économique et culturelle.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        category: "International",
        author: "Omar Ba",
        date: "4 Fév 2026",
        readTime: "6 min"
    },
    {
        id: "9",
        title: "Innovation : Des startups africaines révolutionnent l'agriculture",
        excerpt: "Les nouvelles technologies transforment l'agriculture traditionnelle et améliorent les rendements.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
        category: "Technologie",
        author: "Khadija Touré",
        date: "3 Fév 2026",
        readTime: "7 min"
    },
    {
        id: "10",
        title: "Protection des océans : L'Afrique de l'Ouest s'engage",
        excerpt: "Les pays côtiers lancent une initiative régionale pour protéger la biodiversité marine.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=1000",
        category: "Environnement",
        author: "Seydou Kamara",
        date: "2 Fév 2026",
        readTime: "5 min"
    },
    {
        id: "11",
        title: "L'art contemporain africain conquiert les galeries internationales",
        excerpt: "Les artistes africains gagnent en reconnaissance sur la scène artistique mondiale.",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000",
        category: "Culture",
        author: "Awa Cissé",
        date: "1 Fév 2026",
        readTime: "6 min"
    },
    {
        id: "12",
        title: "Investissements massifs dans les infrastructures de santé",
        excerpt: "Les gouvernements africains augmentent leurs budgets pour améliorer l'accès aux soins de santé.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
        category: "Santé",
        author: "Dr. Mamadou Diakhité",
        date: "31 Jan 2026",
        readTime: "8 min"
    }
];
