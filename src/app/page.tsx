import CategoryCard from "@/components/Card/CategoryCard";
import WeatherCard from "@/components/Card/WeatherCard";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export default function Home() {
  const CategoryItems = [
    {
      id: 1,
      categoryName: "미술관",
      imageUrl: "/images/art-museum.png",
      alt: "art-musuem",
      link: "/",
    },
    { id: 2, categoryName: "공원", imageUrl: "/images/park.png", alt: "park", link: "/" },
    {
      id: 3,
      categoryName: "둘레길",
      imageUrl: "/images/walking-road.png",
      alt: "walking-road",
      link: "/",
    },
  ];
  return (
    <main>
      <Header />
      <div>
        <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
          {CategoryItems.map((category) => {
            const { id, categoryName, imageUrl, alt, link } = category;
            return (
              <div key={id}>
                <CategoryCard
                  categoryName={categoryName}
                  coverImageUrl={imageUrl}
                  alt={alt}
                  link={link}
                />
              </div>
            );
          })}
        </div>
        <div>
          <WeatherCard />
        </div>
        <div>가까운 곳 3개 사진</div>
      </div>
      <Footer />
    </main>
  );
}
