import { Button } from "@mui/material";
import React from "react";
import { useTimerStore } from "./store/useTimerStore";
import styled from "styled-components";

export const AddDisruption = () => {
  const { addDisruption, getSeconds, disruptions } = useTimerStore(
    (store) => store
  );

  return (
    <Button
      variant="contained"
      size={"large"}
      onClick={() => addDisruption(getSeconds())}
    >
      Distracted
    </Button>
  );
};
