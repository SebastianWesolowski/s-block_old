import { ReactElement } from "react";

export interface ISLogoProps {
  logoAssets: ILogoAssets;
  height?: number | string;
  isShowSygnet?: boolean;
}

export interface ILogoAssets {
  sygnet?: ReactElement;
  logo: ReactElement;
}
