import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// In a real app, you'd fetch this from the API
const getArticle = (slug: string) => {
  return {
    title: "India's Tech Boom: A New Era of Innovation",
    subtitle: "How Bangalore became the Silicon Valley of the East",
    content: `
      <p>India is currently witnessing an unprecedented surge in its technology sector. This boom, often centered in Bangalore, is reshaping not just the Indian economy but also the global tech landscape.</p>
      <p>From fintech to deeptech, Indian startups are solving complex problems at scale. The rise of digital public infrastructure (DPI) has paved the way for innovative solutions that are now being exported to other parts of the world.</p>
      <h2>The Bangalore Phenomenon</h2>
      <p>Often referred to as the 'Silicon Valley of India', Bangalore continues to attract the best talent and the highest venture capital. The city's ecosystem of large tech firms, research institutions, and a vibrant startup culture creates a virtuous cycle of innovation.</p>
    `,
    category: 'Technology',
    author: 'Sunil Kumar',
    date: 'March 15, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: `${article.title} | NK News`,
    description: article.subtitle,
    openGraph: {
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <span className="text-red-600 font-bold uppercase tracking-widest text-sm">{article.category}</span>
        <h1 className="text-5xl font-bold font-serif my-4 leading-tight">{article.title}</h1>
        <p className="text-2xl text-gray-500 mb-8 leading-relaxed font-sans">{article.subtitle}</p>
        
        <div className="flex items-center gap-4 border-y py-6">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div>
            <p className="font-bold">By {article.author}</p>
            <p className="text-sm text-gray-400">{article.date} • 5 min read</p>
          </div>
        </div>
      </header>

      <div className="aspect-video w-full overflow-hidden rounded-xl mb-12">
        <img 
          src={article.featuredImage} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        className="prose prose-lg max-w-none font-serif leading-relaxed text-gray-800"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-16 pt-8 border-t">
        <h3 className="text-2xl font-bold mb-6">Read Next</h3>
        {/* Placeholder for related articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <span className="text-xs text-red-600 font-bold uppercase tracking-widest">Business</span>
            <h4 className="font-bold text-lg mt-2 font-serif">India's Economic Growth Accelerates in Q1 2026</h4>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <span className="text-xs text-red-600 font-bold uppercase tracking-widest">Politics</span>
            <h4 className="font-bold text-lg mt-2 font-serif">New Infrastructure Bill Passed in Parliament</h4>
          </div>
        </div>
      </div>
    </article>
  );
}
