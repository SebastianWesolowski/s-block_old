import { ReactElement } from "react";

export interface ISLogoProps {
  logoAssets: ILogoAssets;
  height?: number;
  isShowSygnet?: boolean;
}

export interface ILogoAssets {
  sygnet?: ReactElement;
  logo: ReactElement;
}
