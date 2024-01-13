import React from "react";

import { useKeyboard } from "./index";

export const Example = () => {
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => console.log("Key Down:", e.key),
    onKeyUp: (e) => console.log("Key Up:", e.key),
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input {...keyboardProps} id="example" />
    </>
  );
};
