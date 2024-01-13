import { useEffect, useState } from "react";

type ResultType = {
  isFocusVisible: boolean;
};

export const useFocusVisible = (): ResultType => {
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsFocusVisible(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Tab") {
        setIsFocusVisible(true);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsFocusVisible(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return {
    isFocusVisible,
  };
};
