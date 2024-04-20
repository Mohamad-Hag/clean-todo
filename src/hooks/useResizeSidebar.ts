import {
  maxSidebarWidth,
  minSidebarWidth,
} from "data/typescript/defaultSidebarWidth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWidth, selectSidebar } from "redux/features/sidebarSlice";
import useIsMobile from "./useIsMobile";

const useResizeSidebar = (
  resizerRef: React.MutableRefObject<HTMLDivElement>,
  sidebarRef: React.MutableRefObject<HTMLDivElement>,
  onResize?: (width: number) => void
): { newWidth: number } => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const { status, width } = useSelector(selectSidebar);
  const d = useDispatch();
  const isMobile = useIsMobile();

  const mouseDowned = (e: MouseEvent) => {
    const sidebar = sidebarRef.current;
    sidebar.style.transition = "width 0s";
    document.body.style.cursor = "ew-resize";
    setIsResizing(true);
    e.preventDefault();
  };

  const mouseMoved = (e: MouseEvent) => {
    if (isResizing) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const newWidth = e.clientX;
      const isMinSize =
        newWidth < sidebarRect.width && sidebarRect.width <= minSidebarWidth;
      const isMazSize =
        newWidth > sidebarRect.width && sidebarRect.width >= maxSidebarWidth;

      if (isMazSize || isMinSize) return;

      d(changeWidth(newWidth));
      if (onResize) onResize(newWidth);
    }
  };

  const mouseUpped = (e: MouseEvent) => {
    const sidebar = sidebarRef.current;
    sidebar.style.transition = "width .3s";
    document.body.style.removeProperty("cursor");
    setIsResizing(false);
  };

  const addEventListeners = (resizer: HTMLDivElement) => {
    resizer.addEventListener("mousedown", mouseDowned);
    document.addEventListener("mousemove", mouseMoved);
    document.addEventListener("mouseup", mouseUpped);
  };

  const cleanEventListeners = (resizer: HTMLDivElement) => {
    resizer.removeEventListener("mousedown", mouseDowned);
    document.removeEventListener("mousemove", mouseMoved);
    document.removeEventListener("mouseup", mouseUpped);
  };

  useEffect(() => {
    const resizer = resizerRef.current;

    if (status === "hidden" || isMobile || !resizer) return;

    addEventListeners(resizer);
    return () => cleanEventListeners(resizer);
  });

  return { newWidth: width };
};

export default useResizeSidebar;
