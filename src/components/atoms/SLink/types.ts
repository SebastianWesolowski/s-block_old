import { ReactElement } from "react";

export interface ISLinkProps {
  path: string;
  label: string | ReactElement;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: "noopener" | "noopener noreferrer" | "noreferrer";
}

export enum ESLinkTestId {
  label = "TestID-label",
}
