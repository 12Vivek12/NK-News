import Link from 'next/link';

const DUMMY_ARTICLES = [
  {
    id: '1',
    title: "India's Tech Boom: A New Era of Innovation",
    subtitle: "How Bangalore became the Silicon Valley of the East",
    slug: 'india-tech-boom',
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    category: 'Technology',
    author: 'Sunil Kumar',
    date: 'March 15, 2026'
  },
  {
    id: '2',
    title: "Global Climate Summit 2026: Key Takeaways",
    subtitle: "World leaders agree on new carbon emission targets",
    slug: 'global-climate-summit-2026',
    featuredImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
    category: 'World',
    author: 'Aisha Gupta',
    date: 'March 14, 2026'
  },
  {
    id: '3',
    title: "The Future of Indian Education",
    subtitle: "New policy aims to reshape learning for millions",
    slug: 'future-indian-education',
    featuredImage: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=1000',
    category: 'Education',
    author: 'Rohan Sharma',
    date: 'March 13, 2026'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breaking News Ticker Placeholder */}
      <div className="bg-red-600 text-white px-4 py-2 mb-8 flex items-center">
        <span className="font-bold uppercase tracking-wider mr-4">Breaking</span>
        <div className="overflow-hidden relative h-6 w-full">
          <p className="absolute animate-marquee whitespace-nowrap">
            New economic policy announced by the Finance Ministry • Global markets hit record highs • Weather alert: Early monsoon expected in Southern India
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Section */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <Link href={`/article/${DUMMY_ARTICLES[0].slug}`} className="group block">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={DUMMY_ARTICLES[0].featuredImage} 
                  alt={DUMMY_ARTICLES[0].title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-red-600 font-bold uppercase text-xs tracking-widest">{DUMMY_ARTICLES[0].category}</span>
              <h1 className="text-4xl font-bold font-serif my-2 group-hover:underline decoration-red-600">{DUMMY_ARTICLES[0].title}</h1>
              <p className="text-gray-600 text-lg mb-4">{DUMMY_ARTICLES[0].subtitle}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-black">By {DUMMY_ARTICLES[0].author}</span>
                <span className="mx-2">•</span>
                <span>{DUMMY_ARTICLES[0].date}</span>
              </div>
            </Link>
          </section>

          <hr className="border-gray-200" />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DUMMY_ARTICLES.slice(1).map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={article.featuredImage} 
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-red-600 font-bold uppercase text-[10px] tracking-widest">{article.category}</span>
                <h2 className="text-xl font-bold font-serif my-2 group-hover:text-red-600 transition-colors">{article.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{article.subtitle}</p>
              </Link>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Trending News */}
          <section>
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-6">Trending News</h3>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-4xl font-black text-gray-200 font-serif leading-none">{i}</span>
                  <div>
                    <h4 className="font-bold hover:text-red-600 cursor-pointer transition-colors leading-tight">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <span className="text-xs text-gray-400 mt-1 block uppercase">World</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Slot Placeholder */}
          <div className="bg-gray-100 p-8 text-center rounded border border-dashed border-gray-300">
            <span className="text-gray-400 text-xs uppercase tracking-widest">Advertisement</span>
            <div className="mt-4 h-[250px] flex items-center justify-center text-gray-300">
              300 x 250 Banner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
