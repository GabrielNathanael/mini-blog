import FeaturedArticle from "./FeaturedArticle";
import MiniArticleCard from "./MiniArticleCard";

export default function HeroSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
          Latest News
        </h1>

        <div className="space-y-6 md:space-y-8">
          {/* Featured Article  */}
          <div>
            <FeaturedArticle
              image="https://picsum.photos/800/500"
              category="FINANCE ADVICER"
              title="Barely half of banks' own employees would recommend their international payment services to customers"
              author="Olivia Rhye"
              date="25 Jan 2022"
            />
          </div>

          {/* Mini articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <MiniArticleCard
              image="https://picsum.photos/200/150"
              category="FINANCE ADVICER"
              title="Barely half of banks' own employees would recommend their inter..."
              author="Olivia Rhye"
              date="25 Jan 2002"
            />
            <MiniArticleCard
              image="https://picsum.photos/200/151"
              category="FINANCE ADVICER"
              title="Barely half of banks' own employees would recommend their inter..."
              author="Olivia Rhye"
              date="25 Jan 2002"
            />
            <MiniArticleCard
              image="https://picsum.photos/200/152"
              category="FINANCE ADVICER"
              title="Barely half of banks' own employees would recommend their inter..."
              author="Olivia Rhye"
              date="25 Jan 2002"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
