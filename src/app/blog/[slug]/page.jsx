'use server';

import { getCollection } from "../../../../lib/db";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

// export interface Params {
//   slug: string;
// }

// Dinamik metadata 
export async function generateMetadata({ params }){
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.title || "Blog Yazısı",
    description: post?.content?.slice(0, 160),
  };
}

async function getPostBySlug(slug) {
  const postsCollection = await getCollection("Post");
  const usersCollection = await getCollection("User");

  const post = await postsCollection.findOne({ slug });

  if (!post) return null;

  const author = await usersCollection.findOne({ _id: ObjectId.createFromHexString(post.author) });

  return {
    ...post,
    authorName: author?.name || "Bilinmeyen Yazar",
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-32 bg-white">
      <div>
        <Link href="/blog" className="mb-8 flex items-center gap-2 hover:underline">
          <MdArrowBack className="size-6" />
          <p className="text-gray-800 font-semibold">Geri Dön</p>
        </Link>
      </div>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <span>{new Date(post.createdAt).toLocaleDateString("tr-TR", {
            year: "numeric", month: "long", day: "numeric"
          })}</span>
          <span className="hidden sm:inline">•</span>
          <span>{post.authorName}</span>
        </div>

        <div style={{ whiteSpace: 'pre-line' }} className="prose max-w-none prose-lg text-gray-700 leading-relaxed">
          {post.content}
        </div>
      </article>
    </main>
  );
}









// 'use server';

// import { ObjectId } from "mongodb";
// import { getCollection } from "../../../../lib/db"; // kendi yoluna göre düzelt
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function PostDetail({ params }: PageProps) {
//   const { slug } = params;
  

//   const postsCollection = await getCollection("Post");
//   const usersCollection = await getCollection("User");


//   const post = await postsCollection.findOne({ slug });
  

//   if (!post) {
//     return notFound();
//   }

//   const authorUser = await usersCollection.findOne({ _id: ObjectId.createFromHexString(post.author) });

//   const postWithAuthor = {
//     ...post,
//     authorName: authorUser?.name || "Bilinmeyen Yazar"
//   };


//   return (
//     <div>
//       <h1>{postWithAuthor.title}</h1>
//       <p>{postWithAuthor.content}</p>
//       {/* <small>Yazar: {postWithAuthor.author}</small> */}
//     </div>
//   );
// }

