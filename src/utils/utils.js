export const generateRandomNoFromRange = (startNum,endNum) => {
  return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
} 