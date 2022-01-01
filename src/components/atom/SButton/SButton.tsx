import { FC } from "react";
import Button from "@mui/material/Button";
import { SButtonProps } from "./types";
import "./SButton.scss";

export const SButton: FC<SButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        onClick={onClick}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
      <Button onClick={onClick} variant="contained">
        Hello World
      </Button>
    </>
  );
};
