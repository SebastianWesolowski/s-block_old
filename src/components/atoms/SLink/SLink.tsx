import { Link as MUILink } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import { ESLinkTestId, ISLinkProps } from "./types";

export const SLink: FC<ISLinkProps> = ({ path, label }) => {
  return (
    <Link href={path}>
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
