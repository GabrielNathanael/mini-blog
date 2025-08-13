interface MiniArticleCardProps {
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

export default function MiniArticleCard({
  image,
  category,
  title,
  author,
  date,
}: MiniArticleCardProps) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={image}
        alt={title}
        className="w-24 h-20 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium mb-1">
          {category}
        </span>
        <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-tight mb-1">
          {title}
        </h3>
        <p className="text-gray-500 text-xs">
          {author} • {date}
        </p>
      </div>
    </div>
  );
}
