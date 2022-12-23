// returns array with two items the longest period between array elements
export const getMostLongSlice = (arr: number[]): number[] => {
  const result = [];
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff > max) {
      max = diff;
      maxIndex = i;
    }
  }
  result.push(arr[maxIndex]);
  result.push(arr[maxIndex + 1]);
  return result;
};
