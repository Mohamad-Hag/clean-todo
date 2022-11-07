import { useEffect, useState } from "react";

interface ScreenSize {
  height: number;
  width: number;
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    height: 0,
    width: 0,
  });

  const handleResize = (event: any) => {
    let target = event.target;
    setScreenSize({ height: target.innerHeight, width: target.innerWidth });
  };

  useEffect(() => {
    setScreenSize({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize, false);
  }, []);

  return screenSize;
};

export default useScreenSize;
