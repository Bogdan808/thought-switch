import { useTimerStore } from "../store/useTimerStore";
import { getNumberArrayOfDisruptions } from "./helpers/getNumberArrayOfDisruptions";
import { createResultArray } from "./helpers/createResultArray";
import styled from "styled-components";
import { TListShowResult } from "./types";
// import { mockShowResult480 } from "./mock/mockShowResult";

export const ShowResult = () => {
  const disruptions = useTimerStore((state) => state.disruptions);
  const maxSeconds = useTimerStore((state) => state.maxSeconds);
  const numbers: number[] = [
    ...new Set(getNumberArrayOfDisruptions(disruptions)),
  ];
  const resultArray: TListShowResult = createResultArray(numbers, maxSeconds);
  // const resultArray: TListShowResult = mockShowResult480;

  return (
    <Wrapper>
      {resultArray.map((item, index) => (
        <Item key={index} isDisruption={item.isDisruption} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Item = styled.div<{ isDisruption: boolean }>`
  height: 42px;
  background-color: ${({ isDisruption }) => (isDisruption ? "red" : "green")};
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  &:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
