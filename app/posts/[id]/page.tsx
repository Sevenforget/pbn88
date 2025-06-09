import PostDetail from "@/components/post-detail";
import { fetchPostFromApi } from "@/lib/api-service";
import { ArrowLeft, Dumbbell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://lsintez.net"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    // 관련 포스트는 임시로 비움 (필요시 별도 API 호출 추가 가능)
    // const otherPosts = [];

    return (
      <main className="min-h-screen relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/pattern-bg.png"
              alt="Background Pattern"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center mb-8 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            모든 글 보기
          </Link>

          <PostDetail post={post} />

          <div className="mt-16">
            <div className="flex items-center mb-8">
              <Dumbbell className="w-5 h-5 text-emerald-500 mr-2" />
              <h2 className="text-2xl font-bold text-white">관련 포스트</h2>
            </div>
            {/* <RelatedPosts posts={otherPosts} /> */}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
