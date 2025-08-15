import ContentSection from "@/components/ContentSection";

export default function PostDetailPage({
  params,
}: {
  params: { slugHash: string };
}) {
  return (
    <main className="min-h-screen bg-white">
      {/* Nanti navbar otomatis kalau di RootLayout */}
      <div className="container mx-auto px-4 py-8">
        <ContentSection />
      </div>
    </main>
  );
}
