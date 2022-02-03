import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { Theme } from "@mui/material/styles";
import { SLink } from "atoms/SLink";
import { ISIconLinkProps } from "./types";

export const SIconLink: FC<ISIconLinkProps> = ({
  icon,
  position = "right",
  path,
  label,
}) => {
  const iconWithLabel = (): ReactElement => {
    const iconContainer: any = {
      px: 1,
      pb: "8px",
      pt: "4px",
      display: "flex",
      alignItems: "center",
    };

    const containerStyle = {
      display: "flex",
      pl: 1,
      height: (theme: Theme) => {
        if (label) {
          return `${theme.typography.body2.lineHeight}rem`;
        }

        return "inherit";
      },
    };

    if (position === "left") {
      Object.assign(containerStyle, {
        alignContent: "flex-start",
        justifyContent: "flex-end",
        flexDirection: "row-reverse",
        pr: 1,
        pl: 0,
      });
    }

    if (!label || (typeof label === "string" && label.length === 0)) {
      Object.assign(containerStyle, {
        pl: 0,
        pr: 0,
      });

      Object.assign(iconContainer, {
        p: 1,
      });

      delete iconContainer.px;
      delete iconContainer.pb;
      delete iconContainer.pt;
    }

    return (
      <Box sx={containerStyle}>
        {label ?? label}
        <Box sx={iconContainer}>{icon}</Box>
      </Box>
    );
  };

  return <SLink path={path} label={iconWithLabel()} />;
};
