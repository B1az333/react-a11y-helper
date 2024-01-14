import React, { HTMLAttributes } from "react";

import { useFocusWithin } from "./index";

export const ExampleFocusWithin = () => {
  const { focusWithinProps, isFocusWithin } = useFocusWithin({
    onFocusWithin: () => {
      console.log("Element or its descendant received focus");
    },
    onBlurWithin: () => {
      console.log("Element or all of its descendants lost focus");
    },
    onFocusWithinChange: (focused) => {
      console.log("Focus within state changed:", focused);
    },
  });

  return (
    <div>
      {isFocusWithin ? "Focused within" : "Not focused within"}
      <input />
      <button>Click me</button>
      <div {...(focusWithinProps as HTMLAttributes<HTMLDivElement>)} style={{ width:'100px', height: '100px' }}>
        <input />
      </div>
      <button>Click me</button>
    </div>
  );
};
