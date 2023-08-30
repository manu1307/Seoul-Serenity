import { recommandPlace } from "@/utils/recommandPlace";
import { weatherInterpret } from "@/utils/weatherInterpret";
import React from "react";
import Button from "../Button/Button";

async function WeatherCard() {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
  );

  const data = await response.json();
  const weatherId = data.weather[0].id;
  const currentTemparature = Math.round(data.main.temp - 273);
  const feelsLikeTemparature = Math.round(data.main.feels_like - 273);
  const dayCode = data.weather[0].icon[2];
  const { resultMessage, resultPlace } = recommandPlace(
    weatherId,
    currentTemparature,
    feelsLikeTemparature
  );
  const message = `${resultMessage} 오늘은 ${resultPlace} 어떠세요?`;

  return (
    <div className="py-4">
      <div className="flex items-center ">
        <div className="p-3 flex justify-center items-center  rounded-full">
          {weatherInterpret(weatherId, dayCode)}
        </div>
        <div className="flex flex-col ">
          <div>현재 서울의 온도는 {currentTemparature}℃ 입니다.</div>
          <div>{message}</div>
        </div>
      </div>
      <div className="mt-2">
        <Button>{`${resultPlace} 보러가기`}</Button>
      </div>
    </div>
  );
}

export default WeatherCard;
