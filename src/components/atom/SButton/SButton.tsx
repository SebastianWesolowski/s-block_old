import { SButtonProps } from "./types";
import "./SButton.css";
/**
 * Primary UI component for user interaction
 */
export const SButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: SButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
