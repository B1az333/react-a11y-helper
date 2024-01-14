import React, { useState } from "react";

import { useAriaInteractive } from "./index";

export const ExampleAriaInteractive = () => {
  const [isInteractive, setIsInteractive] = useState(false);

  const toggleInteractive = () => {
    setIsInteractive((prev) => !prev);
  };

  const elementRef = useAriaInteractive<HTMLDivElement>({
    isInteractive,
    ariaLabel: "Це інтерактивний елемент",
    ariaRole: "button",
  });

  return (
    <div ref={elementRef} onClick={toggleInteractive}>
      {isInteractive ? "Інтерактивний елемент" : "Неінтерактивний елемент"}
    </div>
  );
};

export const ExtraExampleAriaInteractive = () => {
  const handleClick = () => alert("Button clicked!");

  const buttonRef = useAriaInteractive<HTMLButtonElement>({
    isInteractive: true,
    ariaLabel: "Aria labeled button",
    ariaHidden: false,
    ariaDisabled: false,
    ariaLive: "polite",
    ariaHasPopup: false,
    ariaExpanded: false,
    ariaRole: "button",
  });

  return (
    <button ref={buttonRef} onClick={handleClick}>
      Click me
    </button>
  );
};
