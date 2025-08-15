import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${baseUrl}/api/homepage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil data homepage");
  }

  const { featured, highlights, grid } = await res.json();

  return (
    <>
      {featured && (
        <HeroSection
          featured={{
            thumbnail:
              featured.thumbnail || "https://via.placeholder.com/800x500",
            category: { name: featured.category?.name || "Uncategorized" },
            title: featured.title || "No title",
            author: { name: featured.author?.name || "Unknown" },
            createdAt: featured.createdAt,
          }}
          highlights={
            highlights?.map((h: any) => ({
              thumbnail: h.thumbnail || "https://via.placeholder.com/200x150",
              category: { name: h.category?.name || "Uncategorized" },
              title: h.title || "No title",
              author: { name: h.author?.name || "Unknown" },
              createdAt: h.createdAt,
            })) || []
          }
        />
      )}

      <CategorySection
        articles={
          grid?.map((g: any) => ({
            id: g.id,
            title: g.title || "No title",
            category: { name: g.category?.name || "Uncategorized" },
            author: { name: g.author?.name || "Unknown" },
            createdAt: g.createdAt,
            thumbnail: g.thumbnail || "https://via.placeholder.com/400x300",
          })) || []
        }
      />
    </>
  );
}
