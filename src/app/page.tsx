import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div>Category</div>
        <div>날씨</div>
        <div>가까운 곳 3개 사진</div>
      </div>
      <Footer />
    </main>
  );
}
