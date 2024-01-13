import React from "react";
import { useToggleButton } from "./useToggleButton";

export const ToggleButtonExample = () => {
  const ref = React.useRef(null);
  const [isSelected, setSelected] = React.useState(false);

  const { buttonProps, isPressed } = useToggleButton({
    isSelected: isSelected,
    onPress: () => {
      setSelected(!isSelected);
    },
  });

  return (
    <button {...buttonProps} ref={ref}>
      {isPressed ? "Натиснуто" : "Не натиснуто"}
    </button>
  );
};
