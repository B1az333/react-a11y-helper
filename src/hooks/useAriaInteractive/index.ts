import { useEffect, useRef } from "react";

type PropsType = {
  isInteractive: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaHidden?: boolean;
  ariaDisabled?: boolean;
  ariaLive?: "off" | "assertive" | "polite";
  ariaHasPopup?: false | true | "menu" | "listbox" | "tree" | "grid" | "dialog";
  ariaExpanded?: boolean;
  ariaOwns?: string;
  ariaRole?: string;
};

export const useAriaInteractive = <T extends HTMLElement>({
  isInteractive,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaHidden,
  ariaDisabled,
  ariaLive,
  ariaHasPopup,
  ariaExpanded,
  ariaOwns,
  ariaRole,
}: PropsType) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      if (isInteractive) {
        if (ariaLabel) element.setAttribute("aria-label", ariaLabel);
        if (ariaLabelledBy)
          element.setAttribute("aria-labelledby", ariaLabelledBy);
        if (ariaDescribedBy)
          element.setAttribute("aria-describedby", ariaDescribedBy);
        if (ariaHidden !== undefined)
          element.setAttribute("aria-hidden", ariaHidden.toString());
        if (ariaDisabled !== undefined)
          element.setAttribute("aria-disabled", ariaDisabled.toString());
        if (ariaLive) element.setAttribute("aria-live", ariaLive);
        if (ariaHasPopup)
          element.setAttribute("aria-haspopup", ariaHasPopup.toString());
        if (ariaExpanded !== undefined)
          element.setAttribute("aria-expanded", ariaExpanded.toString());
        if (ariaOwns) element.setAttribute("aria-owns", ariaOwns);
        if (ariaRole) element.setAttribute("role", ariaRole);
      } else {
        element.removeAttribute("aria-label");
        element.removeAttribute("aria-labelledby");
        element.removeAttribute("aria-describedby");
        element.removeAttribute("aria-hidden");
        element.removeAttribute("aria-disabled");
        element.removeAttribute("aria-live");
        element.removeAttribute("aria-haspopup");
        element.removeAttribute("aria-expanded");
        element.removeAttribute("aria-owns");
        element.removeAttribute("role");
      }
    }
  }, [
    isInteractive,
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    ariaHidden,
    ariaDisabled,
    ariaLive,
    ariaHasPopup,
    ariaExpanded,
    ariaOwns,
  ]);

  return elementRef;
};
