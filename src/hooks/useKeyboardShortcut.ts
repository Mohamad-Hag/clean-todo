import { useEffect } from "react";

export type Modifier = "Ctrl" | "Shift" | "Alt";

const useKeyboardShortcut = (
  callback: () => void,
  keyCode: number,
  modifier?: Modifier
) => {
  const handleKeydown = (event: any) => {
    let nodeName = event.target.nodeName;
    let blockedNodes = ["INPUT", "TEXTAREA"];
    let isShiftKey = modifier === "Shift";
    let isControlKey = modifier === "Ctrl";
    let isAltKey = modifier === "Alt";
    let isContentEditable =
      event.target.getAttribute("contenteditable") === "true";
    let isContentEditableDiv = nodeName === "DIV" && isContentEditable;
    let isBlockedNode = blockedNodes.includes(nodeName) || isContentEditableDiv;
    if (event.repeat || isBlockedNode) return;
    let isKeyPressed = event.keyCode === keyCode;
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
  });
};

export default useKeyboardShortcut;
