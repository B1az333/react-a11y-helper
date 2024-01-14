import {
  useEffect,
  useRef,
  useState,
  useCallback,
  HTMLAttributes,
  ElementType,
} from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  elementType?: ElementType;
  isDisabled?: boolean;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
  onPressUp?: () => void;
  onPressChange?: (isPressed: boolean) => void;
  preventFocusOnPress?: boolean;
}

type ButtonAriaType = {
  buttonProps: Props;
  isPressed: boolean;
};

export const useButton = ({
  elementType = "button",
  isDisabled = false,
  onPress,
  onPressStart,
  onPressEnd,
  onPressUp,
  onPressChange,
  preventFocusOnPress = false,
  ...rest
}: Props): ButtonAriaType => {
  const [isPressed, setIsPressed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handlePressStart = useCallback(() => {
    setIsPressed(true);
    if (onPressStart) onPressStart();
    if (onPressChange) onPressChange(true);
  }, [onPressStart, onPressChange]);

  const handlePressEnd = useCallback(() => {
    setIsPressed(false);
    if (onPressEnd) onPressEnd();
    if (onPressChange) onPressChange(false);
    if (onPressUp) onPressUp();
  }, [onPressEnd, onPressChange, onPressUp]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        if (onPress) onPress();
      }
    },
    [onPress]
  );

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("keydown", handleKeyPress);
      element.addEventListener("mousedown", handlePressStart);
      element.addEventListener("mouseup", handlePressEnd);
      element.addEventListener("touchstart", handlePressStart);
      element.addEventListener("touchend", handlePressEnd);

      return () => {
        element.removeEventListener("keydown", handleKeyPress);
        element.removeEventListener("mousedown", handlePressStart);
        element.removeEventListener("mouseup", handlePressEnd);
        element.removeEventListener("touchstart", handlePressStart);
        element.removeEventListener("touchend", handlePressEnd);
      };
    }
  }, [handleKeyPress, handlePressStart, handlePressEnd]);

  const buttonProps: any = {
    ...rest,
    ref,
    role: "button",
    tabIndex: isDisabled ? -1 : 0,
    "aria-disabled": isDisabled,
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      if (!isDisabled && onPress) {
        onPress();
      }
    },
  };

  if (elementType === "button") {
    buttonProps.type = "button";
    buttonProps.disabled = isDisabled;
  } else if (elementType === "a") {
    buttonProps.href = isDisabled ? undefined : "#";
  }

  if (preventFocusOnPress && isPressed) {
    buttonProps.tabIndex = -1;
  }

  return {
    buttonProps,
    isPressed,
  };
};
