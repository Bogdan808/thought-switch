import styled from "styled-components";
import { Tracker } from "./Tracker";

export const Main = () => {
  return (
    <Center>
      <p>
        Turning off thoughts is key to managing emotions, reducing stress,
        improving sleep and concentration.
      </p>
      <p>
        Our app can help with specialized exercises and techniques to enhance
        well-being.
      </p>
      <Tracker />
    </Center>
  );
};

const Center = styled.div`
  text-align: center;
  margin: 38px auto;
`;
