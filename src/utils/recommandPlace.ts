type ListType = {
  [key: number]: string;
};

export function recommandPlace(
  weatherId: number,
  temparature: number,
  feelsLikeTemparature: number
): string {
  const placeList: ListType = { 1: "미술관", 2: "공원", 3: "둘레길" };
  const candidate = [];

  const recommendationMessage: ListType = {
    1: "가볍게",
    2: "추운데",
    3: "날이 좋습니다.",
    4: "날이 많이 더워요.",
    5: "생각보다 시원한데",
  };

  const relativeWarm = temparature - feelsLikeTemparature > 0 ? false : true;

  const recommandResult = (meesageIdx: number): string => {
    const randomIdx: number = Math.ceil(Math.random() * candidate.length);
    return `${recommendationMessage[meesageIdx]} 오늘은 ${placeList[randomIdx]} 어떠세요?`;
  };

  if (weatherId < 800) {
    candidate.push(1);
  }

  if (weatherId === 800) {
    if (temparature < 0) {
      if (relativeWarm) {
        candidate.push(2, 3);
        return recommandResult(1);
      } else {
        candidate.push(1);
        return recommandResult(2);
      }
    }
    if (temparature > 0 && temparature < 30) {
      candidate.push(2, 3);
      return recommandResult(3);
    }
    if (temparature > 30) {
      if (relativeWarm) {
        candidate.push(1);
        return recommandResult(4);
      } else {
        candidate.push(2, 3);
        return recommandResult(5);
      }
    }
  }

  if (weatherId > 800) {
    if (temparature < 0) {
      if (relativeWarm) {
        candidate.push(2, 3);
        return recommandResult(1);
      } else {
        candidate.push(1);
        return recommandResult(2);
      }
    }
    if (temparature > 0 && temparature < 30) {
      candidate.push(2, 3);
      return recommandResult(3);
    }
    if (temparature > 30) {
      if (relativeWarm) {
        candidate.push(1);
        return recommandResult(4);
      } else {
        candidate.push(2, 3);
        return recommandResult(5);
      }
    }
  }

  return "결과 없음";
}
