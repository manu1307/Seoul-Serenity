import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryCardProps = {
  categoryName: string;
  coverImageUrl: string;
  alt: string;
  link: string;
};

function CategoryCard({ categoryName, coverImageUrl, alt, link }: CategoryCardProps) {
  return (
    <div className="relative w-fit">
      <Link href={link}>
        <div className="absolute bottom-2 right-2 z-10 opacity-100 text-xl font-semibold text-white">
          {categoryName}
        </div>
        <div className="relative w-[150px] h-[110px] rounded-2xl categoryCard">
          <Image className="rounded-2xl opacity-60 " src={coverImageUrl} fill={true} alt={alt} />
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
