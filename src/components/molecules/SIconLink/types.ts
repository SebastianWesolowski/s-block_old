import { ISLinkProps } from "atoms/SLink/types";
import { ReactElement } from "react";

export interface ISIconLinkProps extends ISLinkProps {
  icon: ReactElement;
  position?: "left" | "right";
}
