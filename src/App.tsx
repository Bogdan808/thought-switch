import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Menu } from "./components/Menu/Menu";
import { Outlet } from "react-router-dom";

const theme = createTheme({});

interface IData {
  name: string;
  completed: boolean;
}
const App = () => {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data = querySnapshot.docs.map((doc) => doc.data());

      setData(data as IData[]);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container maxWidth="md">
          <Menu />
          <Outlet />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  padding-top: 64px;
`;

export default App;
