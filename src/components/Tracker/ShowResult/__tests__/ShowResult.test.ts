import { IDisruption, IFinallyDisruption } from "../../types";
import { createResultArray } from "../helpers/createResultArray";
import { getNumberArrayOfDisruptions } from "../helpers/getNumberArrayOfDisruptions";

describe("ShowResult", () => {
  test("Get number array from disruption list", () => {
    const mock: IDisruption[] = [
      { value: 1, label: "" },
      { value: 2, label: "" },
      { value: 3, label: "" },
    ];
    const expected = [1, 2, 3];
    const received = getNumberArrayOfDisruptions(mock);
    expect(received).toEqual(expected);
  });

  test("Create finally array", () => {
    const mock = [1, 2, 3];
    const expected: IFinallyDisruption[] = [
      { value: 0, isDisruption: false },
      { value: 1, isDisruption: true },
      { value: 2, isDisruption: true },
      { value: 3, isDisruption: true },
      { value: 4, isDisruption: false },
      { value: 5, isDisruption: false },
    ];
    const received = createResultArray(mock, 6);
    expect(received).toEqual(expected);
  });
});

export {};
