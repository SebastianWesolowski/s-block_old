import { ISLinkProps } from "components/atoms/SLink/types";
import { ReactElement } from "react";

export interface ISIconLinkProps extends Omit<ISLinkProps, "label"> {
  icon: ReactElement;
  label?: string | ReactElement;
  position?: "left" | "right";
}
