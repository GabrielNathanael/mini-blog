import ArticleCard from "./ArticleCard";

export default function CategorySection() {
  const articles = [
    {
      id: 1,
      title: "Barely half of banks' own employees would",
      category: "FINANCE ADVICER",
      author: "Olivia Rhye",
      date: "25 Jan 2022",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      title: "Barely half of banks' own employees would",
      category: "FINANCE ADVICER",
      author: "Olivia Rhye",
      date: "25 Jan 2022",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      title: "Barely half of banks' own employees would",
      category: "FINANCE ADVICER",
      author: "Olivia Rhye",
      date: "25 Jan 2022",
      image: "https://picsum.photos/400/300?random=3",
    },
  ];

  const categories = [
    "All Categories",
    "Technology",
    "Finance",
    "Lifestyle",
    "Business",
    "Health",
    "Travel",
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-lg md:text-2xl font-bold">
            Operating, Reserve, and Vault accounts
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
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Article Link */}
        <div className="flex justify-center pt-8">
          <a
            href="/articles"
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer text-sm md:text-base"
          >
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
