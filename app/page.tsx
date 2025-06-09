import { getAllPosts } from "@/lib/data"
import PostCard from "@/components/post-card"
import Image from "next/image"
import { Dumbbell } from "lucide-react"
import CategoryFilter from "@/components/category-filter"

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/pattern-bg.png" alt="Background Pattern" fill priority className="object-cover" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center brightness-50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl mb-4">FitJourney</h1>

          <div className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
            <p className="text-2xl font-bold mb-8">당신의 피트니스 여정을 함께합니다</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              #운동루틴
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              #건강식단
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              #홈트레이닝
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              #피트니스팁
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <CategoryFilter />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} id={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
