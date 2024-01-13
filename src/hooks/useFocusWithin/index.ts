import {
  FocusEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

type PropsType = {
  onFocusWithin?: (e: FocusEvent) => void;
  onBlurWithin?: (e: FocusEvent) => void;
  onFocusWithinChange?: (isFocusWithin: boolean) => void;
};

type ResultType = {
  focusWithinProps: {
    ref: MutableRefObject<HTMLElement | null>;
    tabIndex: number;
  };
  isFocusWithin: boolean;
};

export const useFocusWithin = ({
  onFocusWithin,
  onBlurWithin,
  onFocusWithinChange,
}: PropsType): ResultType => {
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      if (
        targetRef.current &&
        targetRef.current.contains(event.target as Node)
      ) {
        setIsFocusWithin(true);
        onFocusWithin && onFocusWithin(event);
        onFocusWithinChange && onFocusWithinChange(true);
      }
    };

    const handleBlur = (event: FocusEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node)
      ) {
        setIsFocusWithin(false);
        onBlurWithin && onBlurWithin(event);
        onFocusWithinChange && onFocusWithinChange(false);
      }
    };

    // @ts-ignore
    document.addEventListener("focus", handleFocus, true);
    // @ts-ignore
    document.addEventListener("blur", handleBlur, true);

    return () => {
      // @ts-ignore
      document.removeEventListener("focus", handleFocus, true);
      // @ts-ignore
      document.removeEventListener("blur", handleBlur, true);
    };
  }, [onFocusWithin, onBlurWithin, onFocusWithinChange]);

  return {
    focusWithinProps: {
      ref: targetRef,
      tabIndex: 0,
    },
    isFocusWithin,
  };
};
