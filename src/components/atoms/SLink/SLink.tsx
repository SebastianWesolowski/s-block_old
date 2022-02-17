import { Link as MUILink, Typography, Button } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import { ESLinkTestId, ISLinkProps } from "./types";
import { StyledLink } from "./styled";

export const SLink: FC<ISLinkProps> = ({ path, label, target, rel }) => {
  if (target) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      // <StyledLink href={path} target="_blank" rel={rel || "noopener"}>
      <StyledLink href={path} target="_blank" rel={rel || "noopener"}>
        <Typography
          component="span"
          variant="body2"
          color="inherit"
          sx={{
            cursor: "pointer",
          }}
          data-testid={ESLinkTestId.label}
        >
          {label}
        </Typography>
      </StyledLink>
      // </StyledLink>
    );
  }

  return (
    <Link href={path} passHref>
      <MUILink
        sx={{ cursor: "pointer", color: "inherit" }}
        variant="body2"
        underline="hover"
        data-testid={ESLinkTestId.label}
      >
        {label}
      </MUILink>
    </Link>
  );
};
