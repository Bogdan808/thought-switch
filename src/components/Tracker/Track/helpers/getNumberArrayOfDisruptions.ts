import { IDisruption } from "../../types";

export const getNumberArrayOfDisruptions = (array: IDisruption[]): number[] => {
  return array.map((i) => i.value);
};
