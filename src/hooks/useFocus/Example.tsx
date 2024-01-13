import React from "react";
import { useState } from "react";

import { useFocus } from "./index";

export const ExampleFocus = () => {
  const [events, setEvents] = useState<string[]>([]);
  const { isFocused, focusProps } = useFocus({
    onFocus: (e) => setEvents([...events, "focus"]),
    onBlur: (e) => setEvents([...events, "blur"]),
    onFocusChange: (isFocused) =>
      setEvents([...events, `focus change: ${isFocused}`]),
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input {...focusProps} id="example" />
      <ul style={{ maxHeight: "200px", overflow: "auto" }}>
        {events.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <p>Is Focused: {isFocused.toString()}</p>
    </>
  );
};
