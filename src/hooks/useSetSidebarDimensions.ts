import {
  maxSidebarWidth,
  minSidebarWidth,
} from "data/typescript/defaultSidebarWidth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import useIsMobile from "./useIsMobile";

const useSetSidebarDimensions = () => {
  const isMobile = useIsMobile();
  const { status, width } = useSelector(selectSidebar);
  const [minWidth, setMinWidth] = useState<number | undefined>(minSidebarWidth);
  let sidebarWidth = status === "shown" ? width : isMobile ? "0" : "14";
  let maxWidth: number | undefined = maxSidebarWidth;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (status === "hidden") {
      maxWidth = maxSidebarWidth;
      setMinWidth(undefined);
      if (isMobile) sidebarWidth = 0;
      else sidebarWidth = 14;
    } else {
      if (isMobile) {
        maxWidth = undefined;
        setMinWidth(undefined);
        sidebarWidth = minSidebarWidth;
      } else {
        sidebarWidth = width;
        maxWidth = maxSidebarWidth;
        setMinWidth(undefined);
        timeout = setTimeout(() => {
          setMinWidth(minSidebarWidth);
        }, 300);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isMobile, status]);

  return { width: sidebarWidth, minWidth, maxWidth };
};

export default useSetSidebarDimensions;
