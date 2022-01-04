declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.md";

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
