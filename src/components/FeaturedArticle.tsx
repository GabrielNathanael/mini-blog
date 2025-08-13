interface FeaturedArticleProps {
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

export default function FeaturedArticle({
  image,
  category,
  title,
  author,
  date,
}: FeaturedArticleProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      <img
        src={image}
        alt={title}
        className="w-full lg:w-1/2 h-48 lg:h-64 object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <span className="text-xs md:text-sm text-gray-500 font-medium mb-2 lg:mb-3">
          {category}
        </span>
        <h2 className="text-base md:text-xl font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
          {title}
        </h2>
        <p className="text-gray-500 text-xs md:text-sm">
          {author} • {date}
        </p>
      </div>
    </div>
  );
}
