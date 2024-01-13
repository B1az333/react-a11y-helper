import { useState } from "react";

import { Props, useButton } from "./index";

interface ToggleButtonProps extends Props {
  isSelected?: boolean;
  onPress?: () => void;
}

interface ToggleButtonAria {
  buttonProps: ToggleButtonProps;
  isPressed: boolean;
}

export const useToggleButton = ({
  elementType = "button",
  isSelected = false,
  onPress,
  ...rest
}: ToggleButtonProps): ToggleButtonAria => {
  const [isPressed, setIsPressed] = useState(false);
  const { buttonProps } = useButton({
    elementType,
    onPress: () => {
      setIsPressed(!isPressed);
      if (onPress) onPress();
    },
    ...rest,
  });

  return {
    isPressed,
    buttonProps: {
      ...buttonProps,
      "aria-pressed": isSelected,
    },
  };
};
