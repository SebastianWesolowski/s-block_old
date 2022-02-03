import { FC } from "react";
import { ISLogoProps } from "./types";
import { LogoContainer, Container } from "./styled";

export const SLogo: FC<ISLogoProps> = ({
  height = 80,
  isShowSygnet = false,
  logoAssets: { logo, sygnet = null },
}) => {
  const Logo = () => logo;
  const Sygnet = () => sygnet;

  // return <Box className="SLogo__container">{logoSrc}</Box>;
  return (
    <Container height={height}>
      <LogoContainer>
        {isShowSygnet && sygnet ? <Sygnet /> : <Logo />}
      </LogoContainer>
    </Container>
  );
};
