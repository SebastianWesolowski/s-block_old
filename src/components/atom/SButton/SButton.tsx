import { SButtonProps } from "./types";
import "./SButton.scss";

/**
 * Primary UI component for user interaction
 */
export const SButton: React.FC<SButtonProps> = ({
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
  );
};
