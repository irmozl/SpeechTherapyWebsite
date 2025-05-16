// components/BlogPreviewSection.tsx

import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Çocuklarda Konuşma Gelişimi",
    summary: "Dil gelişim sürecinde dikkat edilmesi gerekenler ve erken müdahalenin önemi.",
    href: "/blog/cocuklarda-konusma-gelisimi",
  },
  {
    id: 2,
    title: "Kekemelik Tedavi Yöntemleri",
    summary: "Modern yaklaşımlar ve terapi süreçleri hakkında detaylı bilgi.",
    href: "/blog/kekemelik-tedavisi",
  },
  {
    id: 3,
    title: "Artikülasyon Bozuklukları",
    summary: "Seslerin yanlış çıkarılması ve tedavi süreçleri.",
    href: "/blog/artikulasyon-bozuklugu",
  },
];

export default function BlogSection() {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-customGreen-darkest dark:text-customGreen-light mb-8">
          Blog Yazılarımızı İnceleyin
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  ">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 dark:bg-customDarkGray rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-customGreen-dark dark:text-gray-300 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-customGreen-light mb-4">{post.summary}</p>
              <Link
                href={post.href}
                className="inline-block text-customGreen-midDark font-medium hover:underline"
              >
                Devamını Oku →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block bg-customGreen-dark text-customWhite  dark:bg-customGreen-midDark px-6 py-3 rounded-md hover:bg-customGreen-midDark transition-colors duration-300"
          >
            Tüm Blogları Gör
          </Link>
        </div>
      </div>
    </section>
  );
}
