import { Link as MUILink } from "@mui/material";
import { FC } from "react";
import "./SLink.scss";
import Link from "next/link";
import { ISLinkProps } from "./types";

export const SLink: FC<ISLinkProps> = ({ path, label }) => {
  return (
    <Link href={path}>
      <MUILink variant="body2" underline="hover">
        {label}
      </MUILink>
    </Link>
  );
};
