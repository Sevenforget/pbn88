import type { Post } from "@/lib/data";
import { Calendar, User, Tag, Clock, BarChart, Dumbbell } from "lucide-react";
import Image from "next/image";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-700/50 shadow-xl">
      <div className="relative h-80">
        <Image
          src={post.coverImage || "/images/default-cover.png"}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.category && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/80 text-white backdrop-blur-sm">
                {post.category}
              </span>
            )}

            {post.difficulty && (
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
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 pb-6 border-b border-gray-700/50">
          <div className="flex items-center mr-6 mb-2">
            <User className="w-4 h-4 mr-1 text-emerald-500" />
            <span>{post.author || "관리자"}</span>
          </div>

          <div className="flex items-center mr-6 mb-2">
            <Calendar className="w-4 h-4 mr-1 text-emerald-500" />
            <span>{post.date || new Date().toLocaleDateString("ko-KR")}</span>
          </div>

          <div className="flex items-center mr-6 mb-2">
            <Clock className="w-4 h-4 mr-1 text-emerald-500" />
            <span>{post.readTime || "5분"} 소요</span>
          </div>

          {post.calories && (
            <div className="flex items-center mb-2">
              <BarChart className="w-4 h-4 mr-1 text-emerald-500" />
              <span>약 {post.calories}kcal</span>
            </div>
          )}
        </div>

        <div
          className="prose prose-invert prose-emerald max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        {post.workout && (
          <div className="mt-10 p-6 rounded-2xl bg-gray-700/50 border border-gray-600/50">
            <div className="flex items-center mb-4">
              <Dumbbell className="w-5 h-5 text-emerald-500 mr-2" />
              <h3 className="text-xl font-bold text-white">오늘의 운동 루틴</h3>
            </div>
            <ul className="space-y-3">
              {post.workout.map((exercise, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-white">{exercise.name}</p>
                    <p className="text-sm text-gray-300">
                      {exercise.sets} 세트 × {exercise.reps} 회
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-700/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-emerald-400 hover:bg-gray-600 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
