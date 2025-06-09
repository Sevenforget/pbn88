import Link from "next/link"
import type { Post } from "@/lib/data"
import { Calendar, User, Clock, BarChart } from "lucide-react"
import Image from "next/image"

interface PostCardProps {
  post: Post
  id: number
}

export default function PostCard({ post, id }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="group h-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage || "/images/default-cover.png"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

          {post.category && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/80 text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          )}

          {post.difficulty && (
            <div className="absolute top-4 right-4 z-10">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                ${
                  post.difficulty === "초급"
                    ? "bg-green-500/80 text-white"
                    : post.difficulty === "중급"
                      ? "bg-yellow-500/80 text-white"
                      : "bg-red-500/80 text-white"
                }`}
              >
                {post.difficulty}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center text-xs text-gray-400 mb-3">
            <User className="w-3 h-3 mr-1" />
            <span>{post.author || "관리자"}</span>
            <span className="mx-2">•</span>
            <Calendar className="w-3 h-3 mr-1" />
            <span>{post.date || new Date().toLocaleDateString("ko-KR")}</span>
          </div>

          <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-3">
            {post.title}
          </h2>

          <p className="text-gray-300 text-sm line-clamp-3 mb-4">{post.content}</p>

          <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-700/50">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>{post.readTime || "5분"} 소요</span>
            </div>

            {post.calories && (
              <div className="flex items-center">
                <BarChart className="w-3 h-3 mr-1" />
                <span>약 {post.calories}kcal</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
