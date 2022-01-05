---
to: <%= absPath %>/<%= component_name %>.tsx
---
import { FC } from "react";
import "./<%= component_name %>.scss";
import { I<%= component_name %>Props } from "./types";

export const <%= component_name %>: FC<I<%= component_name %>Props> = ({ dummy }) => {
  return (
    <div className="<%= component_name %>__container">
      <h1>{dummy}</h1>
    </div>
  );
};