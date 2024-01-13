import React from "react";

import { useFocusVisible } from "./index";

export const ExampleFocusVisible = () => {
  const { isFocusVisible } = useFocusVisible();

  return (
    <div>
      <h1>Focus Visibility Example</h1>
      <p>Is focus visible on text input: {isFocusVisible ? "Yes" : "No"}</p>
      <button>Click me</button>
      <input type="text" />
    </div>
  );
};
