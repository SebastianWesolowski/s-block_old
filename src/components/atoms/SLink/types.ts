import { ReactElement } from "react";

export interface ISLinkProps {
  path: string;
  label: string | ReactElement;
}

export enum ESLinkTestId {
  label = "TestID-label",
}
