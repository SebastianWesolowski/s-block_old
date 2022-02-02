import { Box } from "@mui/material";
import { FC } from "react";
import "./SLogo.scss";
import { ISLogoProps } from "./types";

export const SLogo: FC<ISLogoProps> = ({ logoSrc }) => {
  return <Box className="SLogo__container">{logoSrc}</Box>;
};
