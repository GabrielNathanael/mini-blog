// view-data.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('📊 Menampilkan data dari database...\n');

    // === Tampilkan Users ===
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    console.log(`👥 ${users.length} User(s):`);
    console.table(users);
    console.log('-'.repeat(50));

    // === Tampilkan Categories ===
    const categories = await prisma.category.findMany();
    console.log(`📌 ${categories.length} Category(s):`);
    console.table(categories);
    console.log('-'.repeat(50));

    // === Tampilkan Posts ===
    const posts = await prisma.post.findMany({
        include: {
            author: { select: { name: true, email: true } },
            category: { select: { name: true } },
        },
    });
    console.log(`📝 ${posts.length} Post(s):`);
    console.table(
        posts.map((p) => ({
            id: p.id,
            title: p.title,
            slug: p.slug,
            author: p.author.name,
            category: p.category.name,
            createdAt: p.createdAt,
        }))
    );
    console.log('-'.repeat(50));
}

main()
    .catch((e) => {
        console.error('❌ Error:', e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });