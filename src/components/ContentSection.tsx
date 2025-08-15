// Add interface for props at the top of the file
interface ContentSectionProps {
  title: string;
  author: string;
  createdAt: string;
  readTime?: string;
  imageUrl?: string;
  subtitle?: string;
  content: string;
}

export default function ContentSection() {
  // Sample data
  const article = {
    title: "How to Build Amazing Web Applications in 2025",
    author: "John Developer",
    createdAt: "Jan 15, 2025",
    readTime: "12 min read",
    imageUrl: "https://picsum.photos/800/400?random=1",
    content: `
        The world of web development is constantly evolving, and 2025 brings exciting new opportunities for developers to create incredible applications. In this comprehensive guide, we'll explore the latest technologies, best practices, and innovative approaches that are shaping the future of web development.
  
        Modern web applications require a thoughtful balance of performance, user experience, and maintainability. Whether you're building a simple blog or a complex enterprise application, understanding the fundamentals and staying current with emerging trends is crucial for success.
  
        Let's dive into the key technologies and methodologies that will define web development in 2025, from cutting-edge frameworks to revolutionary deployment strategies that are changing how we think about building for the web.
  
        Throughout this article, we'll cover practical examples, real-world case studies, and actionable insights that you can immediately apply to your own projects. By the end, you'll have a clear roadmap for creating web applications that not only meet today's standards but are also prepared for tomorrow's challenges.
      `,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white min-h-screen">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        <div className="text-lg text-gray-600 mb-8 leading-relaxed">
          The ultimate guide for modern web development practices and emerging
          technologies
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          <span className="font-medium text-gray-900">{article.author}</span>
          <span>•</span>
          <span>{article.createdAt}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <img
          src={article.imageUrl}
          alt="Article featured image"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Article Content */}
      <section className="prose lg:prose-xl max-w-none">
        <div className="text-gray-800 leading-relaxed space-y-6">
          {article.content.split("\n\n").map(
            (paragraph, index) =>
              paragraph.trim() && (
                <p key={index} className="text-lg leading-8 mb-6">
                  {paragraph.trim()}
                </p>
              )
          )}
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-500 text-sm">End of article</div>
        <div className="text-center text-gray-600 text-sm mt-4">
          Written by{" "}
          <span className="font-medium text-gray-900">{article.author}</span>
        </div>
      </div>
    </div>
  );
}

export function ContentSectionWithProps({
  title,
  author,
  createdAt,
  readTime,
  imageUrl,
  subtitle,
  content,
}: ContentSectionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {title}
        </h1>

        {subtitle && (
          <div className="text-lg text-gray-600 mb-8 leading-relaxed">
            {subtitle}
          </div>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          <span className="font-medium text-gray-900">{author}</span>
          <span>•</span>
          <span>{createdAt}</span>
          {readTime && (
            <>
              <span>•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
      </header>

      {imageUrl && (
        <div className="mb-8">
          <img
            src={imageUrl}
            alt="Article featured image"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      <section className="prose lg:prose-xl max-w-none">
        <div className="text-gray-800 leading-relaxed space-y-6">
          {content.split("\n\n").map(
            (paragraph, index) =>
              paragraph.trim() && (
                <p key={index} className="text-lg leading-8 mb-6">
                  {paragraph.trim()}
                </p>
              )
          )}
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-500 text-sm">End of article</div>
      </div>
    </div>
  );
}
