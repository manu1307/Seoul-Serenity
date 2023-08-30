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
  const iconSize = 30;

  if (weatherId > 800) return <BsFillCloudFill size={iconSize} color={colorCode} />;

  if (weatherId === 800)
    return <BsSunFill size={iconSize} color={dayCode === "d" ? "#e96443" : colorCode} />;

  if (weatherId > 700) return <BsFillCloudFogFill size={iconSize} color={colorCode} />;

  if (weatherId > 600) return <BsSnow size={iconSize} color={colorCode} />;

  if (weatherId >= 300) return <BsCloudRainFill size={iconSize} color={colorCode} />;

  if (weatherId >= 200) return <BsCloudLightningRainFill size={iconSize} color={colorCode} />;

  return <div>Loading Failed</div>;
}
