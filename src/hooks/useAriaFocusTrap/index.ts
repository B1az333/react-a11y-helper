import { useRef, useEffect, KeyboardEvent } from "react";

type FocusTrapOptionsType = {
  initialFocusElement?: HTMLElement | null;
};

export const useAriaFocusTrap = (
  enabled: boolean,
  options: FocusTrapOptionsType = {}
) => {
  const { initialFocusElement } = options;
  const trapRef = useRef<HTMLElement | null>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      handleTabKey(event);
    }
  };

  const handleTabKey = (event: KeyboardEvent) => {
    if (!trapRef.current) return;

    const { shiftKey } = event;
    const firstElement = focusableElementsRef.current[0];
    const lastElement =
      focusableElementsRef.current[focusableElementsRef.current.length - 1];

    if (event.target === lastElement && !shiftKey) {
      event.preventDefault();
      firstElement.focus();
    } else if (event.target === firstElement && shiftKey) {
      event.preventDefault();
      lastElement.focus();
    }
  };

  useEffect(() => {
    if (enabled && trapRef.current) {
      const focusableElements = Array.from(
        trapRef.current.querySelectorAll<HTMLElement>(
          "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
        )
      );

      focusableElementsRef.current = focusableElements;

      const originalFocusedElement = document.activeElement as HTMLElement;

      // @ts-ignore
      trapRef.current.addEventListener("keydown", handleKeyDown);

      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      return () => {
        // @ts-ignore
        trapRef.current?.removeEventListener("keydown", handleKeyDown);
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

