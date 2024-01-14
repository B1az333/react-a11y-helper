import React from "react";

import { useButton } from "./index";

export const ExampleButton = () => {
  const handlePress = () => console.log("Button pressed!");
  const handlePressStart = () => console.log("Button press started!");
  const handlePressEnd = () => console.log("Button press ended!");
  const handlePressUp = () => console.log("Button press up!");
  const handlePressChange = (isPressed: boolean) => console.log("Button press state changed:", isPressed);

  const { buttonProps, isPressed } = useButton({
    onPress: handlePress,
    onPressStart: handlePressStart,
    onPressEnd: handlePressEnd,
    onPressUp: handlePressUp,
    onPressChange: handlePressChange,
    preventFocusOnPress: true,
  });

  return (
    <div>
      <h1>Button Example</h1>
      <button
        {...buttonProps}
        style={{ background: isPressed ? "red" : "blue", color: "white" }}
      >
        Button
      </button>
    </div>
  );
};
