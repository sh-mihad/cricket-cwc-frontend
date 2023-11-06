export const matchNum = (str) => {
    const splitStr = str.split(",");
    return splitStr[1];
  };
  export const seriesName = (str) => {
    const splitStr = str?.split(",");
    return splitStr[0];
  };