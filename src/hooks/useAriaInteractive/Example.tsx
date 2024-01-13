import React, { useState } from "react";

import { useAriaInteractive } from "./index";

export const Example = () => {
  const [isInteractive, setIsInteractive] = useState(false);

  const toggleInteractive = () => {
    setIsInteractive((prev) => !prev);
  };

  const elementRef = useAriaInteractive({
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
