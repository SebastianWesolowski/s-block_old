import { Box, Link as MUILink } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import { ESLinkTestId, ISLinkProps } from "./types";

export const SLink: FC<ISLinkProps> = ({
  path,
  label,
  target,
  rel,
  ariaLabel,
}) => {
  const textStyle = {
    cursor: "pointer",
    color: "inherit",
    typography: "body2",
    "&:hover": {
      textDecoration: "underline",
      color: "inherit",
    },
  };

  if (target) {
    return (
      <Box
        component="a"
        sx={textStyle}
        href={path}
        target="_blank"
        rel={rel || "noopener"}
        aria-label={ariaLabel || "link"}
        data-testid={ESLinkTestId.label}
      >
        {label}
      </Box>
    );
  }

  return (
    <Link href={path} passHref>
      <MUILink sx={textStyle} data-testid={ESLinkTestId.label}>
        {label}
      </MUILink>
    </Link>
  );
};
