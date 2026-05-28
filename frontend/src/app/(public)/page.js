import Header from "@/components/layout/header";
import Filters from "@/components/feed/filters";
import PostList from "@/components/feed/postList";
import { CarouselPlugin } from "@/components/layout/carouselPlugin"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <CarouselPlugin />

      <div className="max-w-5xl mx-auto p-6">
        <Filters />
        <PostList />
      </div>
    </div>
  );
}