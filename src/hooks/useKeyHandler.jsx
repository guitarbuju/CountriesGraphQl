import { useEffect, useState } from "react";

export const useKeyHandler = (ref, originalValue) => {

  const [focusedInput, setFocusedInput]=useState(false);
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        const isFocused = document.activeElement === ref.current;

        if (isFocused) {
          ref.current?.blur();
          setFocusedInput(false);
          ref.current.value=originalValue;
          
         
        } else {
          ref.current?.focus();
          setFocusedInput(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [ref,originalValue]);
  return focusedInput
};
