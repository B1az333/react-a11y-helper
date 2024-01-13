import { useState, useEffect, useRef, HTMLProps } from "react";

export type HoverEventType = {
  type: "hoverstart" | "hoverend";
  pointerType: "mouse" | "pen";
  target: HTMLElement;
};

type PropsType = {
  onHoverStart?: (e: HoverEventType) => void;
  onHoverEnd?: (e: HoverEventType) => void;
  onHoverChange?: (isHovered: boolean) => void;
};

type ResultType = {
  hoverProps: HTMLProps<HTMLElement>;
  isHovered: boolean;
};

export const useHover = ({
  onHoverStart,
  onHoverEnd,
  onHoverChange,
}: PropsType = {}): ResultType => {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  const handleMouseEnter = (event: MouseEvent) => {
    if (targetRef.current) {
      const hoverEvent: HoverEventType = {
        type: "hoverstart",
        pointerType: "mouse",
        target: targetRef.current,
      };
      onHoverStart && onHoverStart(hoverEvent);
      onHoverChange && onHoverChange(true);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = (event: MouseEvent) => {
    if (targetRef.current) {
      const hoverEvent: HoverEventType = {
        type: "hoverend",
        pointerType: "mouse",
        target: targetRef.current,
      };
      onHoverEnd && onHoverEnd(hoverEvent);
      onHoverChange && onHoverChange(false);
      setIsHovered(false);
    }
  };

  useEffect(() => {
    const element = targetRef.current;
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [onHoverStart, onHoverEnd, onHoverChange]);

  const hoverProps: HTMLProps<HTMLElement> = {
    ref: targetRef,
  };

  return { hoverProps, isHovered };
};
