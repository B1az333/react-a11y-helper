import React, { HTMLAttributes } from "react";

import { useFocusWithin } from "./index";

export const Example = () => {
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
    <div {...(focusWithinProps as HTMLAttributes<HTMLDivElement>)}>
      {isFocusWithin ? "Focused within" : "Not focused within"}
      <input />
      <button>Click me</button>
    </div>
  );
};
