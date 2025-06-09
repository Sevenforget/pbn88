import Link from "next/link"
import type { Post } from "@/lib/data"
import Image from "next/image"

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${index}`}>
          <div className="group h-full overflow-hidden rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
            <div className="relative h-32 overflow-hidden">
              <Image
                src={post.coverImage || "/images/default-cover.png"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            </div>

            <div className="p-4">
              <h3 className="text-md font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h3>

              <p className="text-gray-400 text-xs line-clamp-2">{post.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
