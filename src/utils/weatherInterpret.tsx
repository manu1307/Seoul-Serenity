import React from "react";
import {
  BsSnow,
  BsCloudRainFill,
  BsCloudLightningRainFill,
  BsSunFill,
  BsFillCloudFogFill,
  BsFillCloudFill,
} from "react-icons/bs";

export function weatherInterpret(weatherId: number, dayCode: "d" | "n") {
  const colorCode = dayCode === "d" ? "#999999" : "#000";

  if (weatherId > 800) return <BsFillCloudFill size="24" color={colorCode} />;

  if (weatherId === 800)
    return <BsSunFill size="24" color={dayCode === "d" ? "#e96443" : colorCode} />;

  if (weatherId > 700) return <BsFillCloudFogFill size="24" color={colorCode} />;

  if (weatherId > 600) return <BsSnow size="24" color={colorCode} />;

  if (weatherId >= 300) return <BsCloudRainFill size="24" color={colorCode} />;

  if (weatherId >= 200) return <BsCloudLightningRainFill size="24" color={colorCode} />;

  return <div>Loading Failed</div>;
}
