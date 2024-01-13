import { useState, FocusEvent } from "react";

type PropsType = {
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocusChange?: (isFocused: boolean) => void;
};

export const useFocus = ({ onFocus, onBlur, onFocusChange }: PropsType) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
    onFocusChange && onFocusChange(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
    onFocusChange && onFocusChange(false);
  };

  const focusProps = {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  return {
    isFocused,
    focusProps,
  };
};
