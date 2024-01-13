import React, { HTMLAttributes, useState } from "react";

import { useAriaFocusTrap } from "./index";

export const ExampleAriaFocusTrap: React.FC = () => {
  const [trapEnabled, setTrapEnabled] = useState(true);
  const { trapProps } = useAriaFocusTrap(trapEnabled);

  return (
    <div>
      <label>
        Enable Focus Trap
        <input
          type="checkbox"
          checked={trapEnabled}
          onChange={() => setTrapEnabled(!trapEnabled)}
        />
      </label>
      <div
        {...(trapProps as HTMLAttributes<HTMLDivElement>)}
        style={{ border: "1px solid black", padding: "16px", margin: "16px 0" }}
      >
        <input placeholder="Input 1" style={{ marginBottom: "8px" }} />
        <br />
        <input placeholder="Input 2" style={{ marginBottom: "8px" }} />
        <br />
        <button>Button 1</button>
        <br />
        <button>Button 2</button>
      </div>
    </div>
  );
};
