import { Link as MUILink, Typography } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import { ESLinkTestId, ISLinkProps } from "./types";
import { StyledLink } from "./styled";

export const SLink: FC<ISLinkProps> = ({ path, label, target, rel }) => {
  const textStyle = { cursor: "pointer", color: "inherit" };

  if (target) {
    return (
      <StyledLink href={path} target="_blank" rel={rel || "noopener"}>
        <Typography
          component="span"
          variant="body2"
          sx={textStyle}
          data-testid={ESLinkTestId.label}
        >
          {label}
        </Typography>
      </StyledLink>
    );
  }

  return (
    <Link href={path} passHref>
      <MUILink
        sx={textStyle}
        variant="body2"
        underline="hover"
        data-testid={ESLinkTestId.label}
      >
        {label}
      </MUILink>
    </Link>
  );
};
