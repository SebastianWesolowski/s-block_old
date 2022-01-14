---
to: <%= absPath %>/<%= component_name %>.tsx
---
import { Box } from "@mui/material";
import { FC } from "react";
import "./<%= component_name %>.scss";
import { I<%= component_name %>Props } from "./types";

export const <%= component_name %>: FC<I<%= component_name %>Props> = ({ dummy }) => {
  return (
    <Box className="<%= component_name %>__container">
      <h1>{dummy}</h1>
    </Box>
  );
};
