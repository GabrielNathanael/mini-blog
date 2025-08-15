import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // get semua artikel, urutkan terbaru
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        hashId: true,
        content: true,
        thumbnail: true,
        createdAt: true,
        author: { select: { name: true } },
        category: { select: { name: true } },
      },
    });

    if (posts.length === 0) {
      return NextResponse.json({
        featured: null,
        highlights: [],
        grid: [],
      });
    }

    // Bagi data
    const featured = posts[0]; // Artikel pertama
    const highlights = posts.slice(1, 4); // 3–4 artikel setelah featured
    const grid = posts.slice(4); // Sisanya

    return NextResponse.json({
      featured,
      highlights,
      grid,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal mengambil data homepage" },
      { status: 500 }
    );
  }
}
