import { useEffect, useState } from "react";
import Background from "./Background";
import bg0 from "../../assets/bg0.jpg";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";
import bg7 from "../../assets/bg7.jpg";
import bg8 from "../../assets/bg8.jpg";
import bg9 from "../../assets/bg9.jpg";
import bg10 from "../../assets/bg10.jpg";
import bg11 from "../../assets/bg11.jpg";

let bgs = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];

export default function BackgroundsPanel() {
  const [isActiveArray, setIsActiveArray] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const select = (index: number) => {
    let activeArray = [...isActiveArray];
    let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
    activeArray[activeBackgroundIndex] = false;
    activeArray[index] = true;
    setIsActiveArray(activeArray);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {isActiveArray.map((isActive, index) => (
        <Background
          index={index}
          source={bgs[index]}
          isActive={isActive}
          onSelect={select}
        />
      ))}
    </div>
  );
}
