import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import "./SIconLink.scss";
import { Theme } from "@mui/material/styles";
import { SLink } from "atoms/SLink";
import { ISIconLinkProps } from "./types";

export const SIconLink: FC<ISIconLinkProps> = ({
  icon,
  position = "right",
  path,
  label,
}) => {
  const iconWithLabel = (): ReactElement => {
    const style = {
      display: "flex",
      pl: 1,
      height: (theme: Theme) => `${theme.typography.body2.lineHeight}rem`,
    };

    if (position === "left") {
      Object.assign(style, {
        alignContent: "flex-start",
        justifyContent: "flex-end",
        flexDirection: "row-reverse",
        pr: 1,
        pl: 0,
      });
    }

    if (typeof label === "string" && label.length === 0) {
      Object.assign(style, {
        pl: 0,
        pr: 0,
      });
    }

    return (
      <Box sx={style}>
        {label}
        <Box sx={{ px: 1, pb: "8px", pt: "4px", display: "flex" }}>{icon}</Box>
      </Box>
    );
  };

  return <SLink path={path} label={iconWithLabel()} />;
};
