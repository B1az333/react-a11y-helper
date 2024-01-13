import React, { useState, KeyboardEvent } from "react";

type PropsType = {
  onKeyDown?: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
};

type ResultType = {
  keyboardProps: React.DOMAttributes<HTMLInputElement>;
};

export const useKeyboard = ({ onKeyDown, onKeyUp }: PropsType): ResultType => {
  const [events, setEvents] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent) => {
    onKeyDown && onKeyDown(e);
    setEvents((prevEvents) => [`key down: ${e.key}`, ...prevEvents]);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    onKeyUp && onKeyUp(e);
    setEvents((prevEvents) => [`key up: ${e.key}`, ...prevEvents]);
  };

  const keyboardProps: React.DOMAttributes<HTMLInputElement> = {
    onKeyDown: handleKeyDown as React.KeyboardEventHandler<HTMLInputElement>,
    onKeyUp: handleKeyUp as React.KeyboardEventHandler<HTMLInputElement>,
  };

  return { keyboardProps };
};
