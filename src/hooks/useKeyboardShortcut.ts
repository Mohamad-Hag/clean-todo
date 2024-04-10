import keyShortcutBlockedClassName from "data/typescript/keyShortcutBlockedClassName";
import { useEffect } from "react";
import hasParentWithClassName from "utils/types/hasParentWithClassName";

export type Modifier = "Ctrl" | "Shift" | "Alt";

const useKeyboardShortcut = (
  callback: (
    keyCodePressed?: number,
    keyCodeIndexInKeyCodeArray?: number
  ) => void,
  keyCode: number | number[],
  modifier?: Modifier
) => {
  const handleKeydown = (event: any) => {
    let target = event.target;
    let nodeName = target.nodeName;
    let blockedNodes = ["INPUT", "TEXTAREA"];
    let blockedClassNames = [keyShortcutBlockedClassName];
    let isShiftKey = modifier === "Shift";
    let isControlKey = modifier === "Ctrl";
    let isAltKey = modifier === "Alt";
    let isContentEditable =
      event.target.getAttribute("contenteditable") === "true";
    let isContentEditableDiv = nodeName === "DIV" && isContentEditable;
    let isClassNamesBlocked = !!blockedClassNames.find((className: string) =>
      hasParentWithClassName(target, className)
    );
    let isBlockedNode =
      blockedNodes.includes(nodeName) ||
      isClassNamesBlocked ||
      isContentEditableDiv;

    if (event.repeat || isBlockedNode) return;
    let isKeyPressed = Array.isArray(keyCode)
      ? keyCode.includes(event.keyCode)
      : event.keyCode === keyCode;
    let isModifierPressed =
      event.ctrlKey === isControlKey &&
      event.shiftKey === isShiftKey &&
      event.altKey === isAltKey;
    let canPress = modifier ? isKeyPressed && isModifierPressed : isKeyPressed;
    let keyCodeIndexInKeyCodeArray = Array.isArray(keyCode)
      ? keyCode.findIndex((code) => event.keyCode === code)
      : undefined;
    if (canPress) {
      event.preventDefault();
      callback(event.keyCode, keyCodeIndexInKeyCodeArray);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown, false);
    return () => window.removeEventListener("keydown", handleKeydown, false);
  });
};

export default useKeyboardShortcut;
