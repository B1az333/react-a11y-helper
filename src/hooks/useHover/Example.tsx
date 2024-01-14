import React, { HTMLAttributes } from "react";

import { useHover } from "./index";

export const ExampleHover = () => {
  const { hoverProps, isHovered } = useHover({
    onHoverStart: (e) => {
      console.log("Hover Started!", e.target);
    },
    onHoverEnd: (e) => {
      console.log("Hover Ended!", e.target);
    },
    onHoverChange: (isHovered) => {
      console.log("Hover State Changed:", isHovered);
    },
  });

  return (
    <div
      {...(hoverProps as HTMLAttributes<HTMLDivElement>)}
      style={{ padding: "20px", background: isHovered ? "lightgray" : "white" }}
    >
      Hover over me!
    </div>
  );
};
