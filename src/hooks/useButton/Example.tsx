import React from "react";

import { useButton } from "./index";

const CustomButton = ({ onPress, children }) => {
  const { buttonProps, isPressed } = useButton({ onPress });

  return (
    <button
      {...buttonProps}
      style={{ background: isPressed ? "red" : "blue", color: "white" }}
    >
      {children}
    </button>
  );
};

export const Example = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>Custom Button Example</h1>
      <CustomButton onPress={handleClick}>Click me!</CustomButton>
    </div>
  );
};
