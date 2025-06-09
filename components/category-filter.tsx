"use client"

import { useState } from "react"
import { Dumbbell, Utensils, Home, Lightbulb, LayoutGrid } from "lucide-react"

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "전체", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "workout", name: "운동 루틴", icon: <Dumbbell className="w-4 h-4" /> },
    { id: "diet", name: "식단 관리", icon: <Utensils className="w-4 h-4" /> },
    { id: "home", name: "홈트레이닝", icon: <Home className="w-4 h-4" /> },
    { id: "tips", name: "피트니스 팁", icon: <Lightbulb className="w-4 h-4" /> },
  ]

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-white mb-6">카테고리</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all
              ${
                activeCategory === category.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
