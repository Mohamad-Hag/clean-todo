import keyShortcutBlockedClassName from "data/typescript/keyShortcutBlockedClassName";
import keyShortcutExceptionId from "data/typescript/keyShortcutExceptionId";
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
  const isBlockedNode = (target: any): boolean => {
    let nodeName = target.nodeName;
    let blockedNodes = ["INPUT", "TEXTAREA"];
    let blockedClassNames = [keyShortcutBlockedClassName];
    let isExceptionNode = target.getAttribute("id") === keyShortcutExceptionId;
    let isClassNamesBlocked = !!blockedClassNames.find((className: string) =>
      hasParentWithClassName(target, className)
    );
    let isContentEditable = target.getAttribute("contenteditable") === "true";
    let isContentEditableDiv = nodeName === "DIV" && isContentEditable;

    let isBlockedNode =
      (blockedNodes.includes(nodeName) && !isExceptionNode) ||
      isClassNamesBlocked ||
      isContentEditableDiv;

    return isBlockedNode;
  };

  const canPress = (event: any) => {
    let isShiftKey = modifier === "Shift";
    let isControlKey = modifier === "Ctrl";
    let isAltKey = modifier === "Alt";

    let isKeyPressed = Array.isArray(keyCode)
      ? keyCode.includes(event.keyCode)
      : event.keyCode === keyCode;

    let isModifierPressed =
      event.ctrlKey === isControlKey &&
      event.shiftKey === isShiftKey &&
      event.altKey === isAltKey;

    let canPrss = modifier ? isKeyPressed && isModifierPressed : isKeyPressed;

    return canPrss;
  };

  const handleKeydown = (event: any) => {
    let isBlocked = isBlockedNode(event.target);

    if (event.repeat || isBlocked) return;

    let keyCodeIndexInKeyCodeArray = Array.isArray(keyCode)
      ? keyCode.findIndex((code) => event.keyCode === code)
      : undefined;

    if (canPress(event)) {
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
