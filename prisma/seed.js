import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

function makeSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function makeHashId() {
  return crypto.randomBytes(4).toString("hex");
}

async function main() {
  console.log("🌱 Seeding data...");

  // Kategori
  const tech = await prisma.category.create({ data: { name: "Technology" } });
  const finance = await prisma.category.create({ data: { name: "Finance" } });
  const lifestyle = await prisma.category.create({ data: { name: "Lifestyle" } });
  const sports = await prisma.category.create({ data: { name: "Sport" } });

  // User
  const user = await prisma.user.create({
    data: {
      name: "Gabriel Nath",
      email: "gabriel@example.com",
      password: "hashed_password_nanti",
      role: "editor",
    },
  });

  // Post
  const posts = [
    { title: "Top AI Innovations Shaping the Future of Technology in 2025", content: "Discover the latest breakthroughs in artificial intelligence revolutionizing industries worldwide...", thumbnail: "/uploads/thumbnail1.jpg", categoryId: tech.id },
    { title: "How Tech is Adapting to Economic Challenges with Smart Solutions", content: "Innovations in software and hardware designed to reduce costs and increase efficiency during downturns...", thumbnail: "/uploads/thumbnail2.jpg", categoryId: tech.id },
    { title: "Staying Active in the City: Urban Fitness Tips for Modern Life", content: "How city dwellers can maintain physical health through running, cycling, and outdoor workouts...", thumbnail: "/uploads/thumbnail3.jpg", categoryId: sports.id },
    { title: "Beginner's Guide to Starting a Fitness Routine Without Injury", content: "Simple and effective workouts to kickstart your fitness journey safely and sustainably...", thumbnail: "/uploads/thumbnail4.jpg", categoryId: sports.id },
    { title: "How Blockchain is Transforming Financial Systems in 2025", content: "Exploring the impact of decentralized technology on banking, payments, and digital assets...", thumbnail: "/uploads/thumbnail5.jpg", categoryId: finance.id },
    { title: "The Hottest Gadgets Trending This Year in Personal Finance Tech", content: "From smartwatches to AI-powered devices, here are the most exciting tech releases of the year...", thumbnail: "/uploads/thumbnail6.jpg", categoryId: finance.id },
    { title: "Healthy Living in Melbourne and Sydney: Urban Wellness Culture", content: "How residents in Australia's major cities are embracing active lifestyles and mindful eating...", thumbnail: "/uploads/thumbnail7.jpg", categoryId: lifestyle.id },
    { title: "Mindfulness and Minimalism in Modern Life: A Balanced Approach", content: "How simplifying your routine can lead to greater peace and productivity in daily life...", thumbnail: "/uploads/thumbnail8.jpg", categoryId: lifestyle.id },
    { title: "Cryptocurrency Trends Influencing Global Markets in 2025", content: "An overview of how digital currencies are reshaping investment portfolios and financial institutions...", thumbnail: "/uploads/thumbnail9.jpg", categoryId: finance.id },
    { title: "Fintech Breakthroughs Changing Personal Finance Forever", content: "How mobile banking, AI advisors, and digital wallets are making finance more accessible...", thumbnail: "/uploads/thumbnail10.jpg", categoryId: finance.id },
    { title: "How Athletes Use Technology to Optimize Training Performance", content: "Exploring wearable tech and data analytics in modern sports conditioning and recovery...", thumbnail: "/uploads/thumbnail11.jpg", categoryId: sports.id },
    { title: "The Rise of Smart Gyms and Connected Fitness Equipment", content: "How IoT and AI are transforming traditional workouts into personalized fitness experiences...", thumbnail: "/uploads/thumbnail12.jpg", categoryId: sports.id },
    { title: "Digital Detox and Slow Living: A Modern Approach to Wellbeing", content: "Unplugging from technology to reconnect with nature, self, and meaningful daily rituals...", thumbnail: "/uploads/thumbnail13.jpg", categoryId: lifestyle.id },
  ];

  for (const post of posts) {
    await prisma.post.create({
      data: {
        title: post.title,
        slug: makeSlug(post.title),
        hashId: makeHashId(),
        shortDesc: "Ringkasan " + post.title,
        content: post.content,
        thumbnail: post.thumbnail,
        authorId: user.id,
        categoryId: post.categoryId,
      },
    });
  }

  console.log("✅ Seeding selesai");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
