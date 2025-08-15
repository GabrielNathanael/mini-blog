// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

// GET: Ambil semua post atau filter by kategori
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const posts = await prisma.post.findMany({
      where: category
        ? {
            category: {
              name: {
                equals: category,
                mode: "insensitive",
              },
            },
          }
        : undefined,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        hashId: true,
        content: true,
        shortDesc: true,
        thumbnail: true,
        createdAt: true,
        author: { select: { name: true } },
        category: { select: { name: true } },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal mengambil post" },
      { status: 500 }
    );
  }
}

// POST: Tambah post baru
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, shortDesc, content, thumbnail, authorId, categoryId } = body;

    if (
      !title ||
      !shortDesc ||
      !content ||
      !thumbnail ||
      !authorId ||
      !categoryId
    ) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const hashId = crypto.randomBytes(4).toString("hex");

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        hashId,
        shortDesc,
        content,
        thumbnail,
        authorId,
        categoryId,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal membuat post" }, { status: 500 });
  }
}
