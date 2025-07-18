'use server';
import Link from "next/link"

import { getCollection } from "../../../lib/db"
import { ObjectId } from "mongodb"

async function getPosts(){
  const postsCollection = await getCollection("Post")
  const usersCollection = await getCollection("User")

  const posts = await postsCollection.find().sort({ _id: -1 }).toArray()

  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => {
      const author = await usersCollection.findOne({ _id: new ObjectId(post.author) })
      return {
        ...post,
        authorName: author?.name || "Bilinmeyen Yazar"
      }
    })
  )

  return postsWithAuthors
}


export default async function BlogPage() {
  const post = await getPosts()


  return (
    <section className="min-h-screen sm:py-12 pt-12 md:pt-24">
  <div className="mx-auto grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
    {post.map((post) => (
      <div
        key={post._id}
        className="flex flex-col justify-between bg-white lg:mb-0 mb-8 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-customGreen-darkest mb-3 leading-snug">
          {post.title}
        </h2>

        <div>
          <p className="text-sm text-gray-400 mb-1">
          {new Date(post.createdAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="text-base text-gray-600 mb-4">{post.authorName}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-white bg-customGreen-midDark hover:bg-customGreen-dark transition-colors duration-300 px-4 py-2 rounded-full"
        >
          Devamını oku
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

