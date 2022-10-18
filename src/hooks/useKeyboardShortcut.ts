import { useEffect } from "react";

export type Modifier = "Ctrl" | "Shift" | "Alt";

const useKeyboardShortcut = (
  callback: () => void,
  key: string,
  modifier?: Modifier
) => {
  const handleKeydown = (event: any) => {
    let tagName = event.currentTarget.TagName;
    let isShiftKey = modifier === "Shift";
    let isControlKey = modifier === "Ctrl";
    let isAltKey = modifier === "Alt";
    let isInputElement = tagName === ("INPUT" || "TEXTAREA");
    if (event.repeat || isInputElement) return;
    let isKeyPressed = event.key === key || event.key === key.toLowerCase();
    let isModifierPressed =
      event.ctrlKey === isControlKey &&
      event.shiftKey === isShiftKey &&
      event.altKey === isAltKey;
    let canPress = modifier ? isKeyPressed && isModifierPressed : isKeyPressed;
    if (canPress) callback();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown, false);
    return () => window.removeEventListener("keydown", handleKeydown, false);
  }, []);
};

export default useKeyboardShortcut;
