"use client";

import React from "react";

function ContentCard() {
  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SEOUL_PARK_API_URL}`);

    const data = await response.json();
  };
  fetchData();
  return <div></div>;
}

export default ContentCard;
