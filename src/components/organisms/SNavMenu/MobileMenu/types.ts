import { MouseEventHandler, ReactElement } from "react";

export interface IMobileMenuProps {
  logoAssets: {
    sygnet?: ReactElement;
    logo: ReactElement;
  };
  isOpenMenu: boolean;
  onHandleClickMenu: MouseEventHandler;
}
