import { ReactElement } from "react";

export interface ISIconLinkProps {
  path: string;
  icon: ReactElement;
  label?: string | ReactElement;
  position?: "left" | "right";
}
