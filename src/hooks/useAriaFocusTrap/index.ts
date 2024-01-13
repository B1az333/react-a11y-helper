import { useRef, useEffect } from "react";

type FocusTrapOptionsType = {
  initialFocusElement?: HTMLElement | null;
};

export const useAriaFocusTrap = (
  enabled: boolean,
  options: FocusTrapOptionsType = {}
) => {
  const { initialFocusElement } = options;
  const trapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (enabled && trapRef.current) {
      const originalFocusedElement = document.activeElement as HTMLElement;

      trapRef.current.focus();

      const handleFocus = (event: FocusEvent) => {
        if (!trapRef.current?.contains(event.target as Node)) {
          initialFocusElement?.focus();
        }
      };

      document.addEventListener("focusin", handleFocus);

      return () => {
        document.removeEventListener("focusin", handleFocus);
        originalFocusedElement.focus();
      };
    }
  }, [enabled, initialFocusElement]);

  const trapProps = {
    ref: trapRef,
    tabIndex: -1,
  };

  return {
    trapProps,
  };
};
