import { Typography } from "@mui/material";
import { useTimerStore } from "./store/useTimerStore";
import styled from "styled-components";

export const BestResult = () => {
  const disruptions = useTimerStore((store) => store.disruptions);

  return (
    <Wrapper>
      <Typography variant={"h3"}>Best result: 0</Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
