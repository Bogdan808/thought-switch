import styled from "styled-components";
import { Tracker } from "./Tracker";
import { Box, Button, Input, Typography } from "@mui/material";
import { Center } from "./styles";

export const LogIn = () => {
  return (
    <Center>
      <Typography variant="body2" color="text.secondary">
        Login
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Box
          sx={{
            py: 2,
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Input
            placeholder="name"
            required
            sx={{ fontSize: "var(--joy-fontSize-sm)" }}
          />
          <Input
            placeholder="password"
            required
            sx={{ fontSize: "var(--joy-fontSize-sm)" }}
            type={"password"}
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Center>
  );
};
