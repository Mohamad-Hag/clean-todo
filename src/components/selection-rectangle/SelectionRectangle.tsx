import { useEffect, useRef, useState } from "react";
import "../../styles/SelectionRectangle.css";
import Point from "../../utils/interfaces/Point";

export default function SelectionRectangle() {
  let ref = useRef<HTMLDivElement>(null!);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [currentPoint, setCurrentPoint] = useState<Point>({ x: 0, y: 0 });

  const addEventListeners = () => {
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("mousemove", mouseMove);
  };

  const removeEventListeners = () => {
    window.removeEventListener("mousedown", mouseDown);
    window.removeEventListener("mouseup", mouseUp);
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  };

  const mouseDown = (e: MouseEvent) => {
    e.stopPropagation();
    setLeft(e.pageX);
    setTop(e.pageY);
    setIsMouseDown(true);
    setIsShown(true);
    setCurrentPoint({ x: e.pageX, y: e.pageY });
  };

  const mouseMove = (e: MouseEvent) => {
    let to = getComputedStyle(ref.current).getPropertyValue("top");
    let le = getComputedStyle(ref.current).getPropertyValue("left");
    if (!isMouseDown) return;
    e.stopPropagation();
    setWidth(Math.abs(e.pageX - parseInt(le)));
    setHeight(Math.abs(e.pageY - parseInt(to)));

    if (e.pageY < currentPoint.y) {
      setTop(e.pageY);
      setHeight(Math.abs(e.pageY - currentPoint.y));
    }
    if (e.pageX < currentPoint.x) {
      setLeft(e.pageX);
      setWidth(Math.abs(e.pageX - currentPoint.x));
    }
  };

  const mouseUp = (e: any) => {
    e.stopPropagation();
    setIsMouseDown(false);
    setIsShown(false);
    setWidth(0);
    setHeight(0);
  };

  useEffect(() => {
    addEventListeners();
    return () => {
      removeEventListeners();
    };
  }, [isMouseDown]);

  const style = {
    top: `${top}px`,
    height: `${height}px`,
    left: `${left}px`,
    width: `${width}px`,
    display: isShown ? "block" : "none",
  };

  return <div ref={ref} className="SelectionRectangle" style={style} />;
}
