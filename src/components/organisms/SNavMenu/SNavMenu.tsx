import { IconButton } from "@mui/material";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SLogo } from "atoms/SLogo";
import { ISNavMenuProps } from "./types";

import { Container, LogoContainer, NavContainer } from "./styled";
import { MobileMenu } from "./MobileMenu";

export const SNavMenu: FC<ISNavMenuProps> = ({ height = 80, logoAssets }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const onHandleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Container height={height}>
      <MobileMenu
        logoAssets={logoAssets}
        isOpenMenu={isOpenMenu}
        onHandleClickMenu={onHandleClickMenu}
      />
      <LogoContainer>
        <SLogo logoAssets={logoAssets} height="100%" />
        {/* {sygnet} */}
      </LogoContainer>
      <NavContainer>
        <IconButton aria-label="mobile menu" onClick={onHandleClickMenu}>
          {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </NavContainer>
    </Container>
  );
};
