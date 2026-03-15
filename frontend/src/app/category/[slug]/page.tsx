import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dummy data for category articles
const DUMMY_CATEGORY_ARTICLES = [
  {
    id: '1',
    title: "Major Infrastructure Project Announced for Mumbai",
    subtitle: "New sea link to reduce travel time by 40%",
    slug: 'mumbai-infrastructure-project',
    category: 'India',
    featuredImage: 'https://images.unsplash.com/photo-1570160891173-ec7a7cba279f?auto=format&fit=crop&q=80&w=1000',
    date: 'March 15, 2026'
  },
  {
    id: '2',
    title: "Elections 2026: What to Expect",
    subtitle: "Political landscape shifts as new parties emerge",
    slug: 'elections-2026-expectations',
    category: 'Politics',
    featuredImage: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1000',
    date: 'March 14, 2026'
  },
  {
    id: '3',
    title: "Startup Funding Reaches Record High",
    subtitle: "Investors bullish on Indian fintech sector",
    slug: 'startup-funding-record-high',
    category: 'Business',
    featuredImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000',
    date: 'March 13, 2026'
  }
];

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  // In a real app, you would fetch articles by category
  const filteredArticles = DUMMY_CATEGORY_ARTICLES; 

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-extrabold font-serif uppercase tracking-tight">{categoryName} News</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredArticles.map((article) => (
          <Link key={article.id} href={`/article/${article.slug}`} className="group block">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-gray-100">
              <img 
                src={article.featuredImage} 
                alt={article.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <span className="text-red-600 font-bold uppercase text-[10px] tracking-widest">{article.category}</span>
              <h2 className="text-2xl font-bold font-serif leading-tight group-hover:text-red-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                {article.subtitle}
              </p>
              <p className="text-xs text-gray-400 pt-2 font-medium">Published on {article.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed">
          <p className="text-gray-400">No articles found in this category yet.</p>
        </div>
      )}
    </div>
  );
}
