import React, { HTMLAttributes, useState } from "react";

import { ExampleFocus } from "./hooks/useFocus/Example";
import { ExampleHelmet1, ExampleHelmet2 } from "components/Helmet/Example";
import { ExampleFocusVisible } from "./hooks/useFocusVisible/Example";

const App: React.FC = () => {
  return (
    <>
      {/*<ExampleHelmet1 />*/}
      {/*<ExampleHelmet2 />*/}
      {/*<ExampleFocus />*/}
      <ExampleFocusVisible />
    </>
  );
};

export default App;
