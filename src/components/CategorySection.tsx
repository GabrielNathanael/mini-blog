import ArticleCard from "./ArticleCard";

interface Article {
  id: number;
  title: string;
  category: { name: string };
  author: { name: string };
  createdAt: string;
  thumbnail: string;
}

interface CategorySectionProps {
  articles: Article[];
}

export default function CategorySection({ articles }: CategorySectionProps) {
  const categories = [
    "All Categories",
    "Technology",
    "Finance",
    "Lifestyle",
    "Sports",
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-lg md:text-2xl font-bold">
            Not fast news. Not hot takes. Just thoughtful writing.
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group transition-transform duration-300 hover:scale-105"
            >
              <ArticleCard
                article={{
                  id: article.id,
                  title: article.title,
                  category: article.category.name,
                  author: article.author.name,
                  date: new Date(article.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  ),
                  image: article.thumbnail,
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Article Button */}
        <div className="flex justify-center pt-8">
          <a className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer text-sm md:text-base">
            <span>View All Article</span>
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
