"use client";

import Image from "next/image";
import React, { useState } from "react";

function ContentCard() {
  const [imageUrl, setImageUrl] = useState<string>();
  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SEOUL_PARK_API_URL}`);
    const data = await response.json();
    console.log(data.body.DATA[0].p_img);
    setImageUrl(data.body.DATA[0].p_img);
  };
  fetchData();
  return (
    <div className="relatw-[300px] h-[350px]">
      <div className="relative w-full h-full rounded-2xl categoryCard">
        <Image className="rounded-2xl " src={imageUrl ? imageUrl : ""} fill={true} alt="bg-image" />
      </div>
      <div className="relative"></div>
    </div>
  );
}

export default ContentCard;
