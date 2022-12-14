import React, { useEffect } from "react";

import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Tracker } from "./components/Tracker";
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container maxWidth="md">
          <Tracker />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  padding-top: 28px;
`;

export default App;
