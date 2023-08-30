import CategoryCard from "@/components/Card/CategoryCard";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
          <CategoryCard
            categoryName="미술관"
            coverImageUrl="/images/art-museum.png"
            alt="art-museum"
            link="/"
          />
          <CategoryCard
            categoryName="공원"
            coverImageUrl="/images/park.png"
            alt="art-museum"
            link="/"
          />
          <CategoryCard
            categoryName="둘레길"
            coverImageUrl="/images/walking-road.png"
            alt="art-museum"
            link="/"
          />
        </div>
        <div>날씨</div>
        <div>가까운 곳 3개 사진</div>
      </div>
      <Footer />
    </main>
  );
}
