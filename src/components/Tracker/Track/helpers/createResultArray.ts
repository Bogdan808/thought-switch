import { IFinallyDisruption } from "../../types";

export const createResultArray = (
  array: number[],
  size: number
): IFinallyDisruption[] => {
  const defineArray: IFinallyDisruption[] = Array.from(Array(size), (_, x) => ({
    value: x,
    isDisruption: false,
  }));

  return defineArray.map((e) => ({
    value: e.value,
    isDisruption: array.includes(e.value),
  }));
};
