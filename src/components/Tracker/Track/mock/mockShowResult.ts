import { TListShowResult } from "../types";

export const generateMockResult = (size: number): TListShowResult => {
  const array = Array.from({ length: size }, (a, i) => {
    return {
      value: i,
      isDisruption: false,
    };
  });
  array[size - 5] = {
    value: size - 5,
    isDisruption: true,
  };
  return array;
};

export const mockShowResult120 = generateMockResult(120);
export const mockShowResult240 = generateMockResult(240);
export const mockShowResult480 = generateMockResult(480);
