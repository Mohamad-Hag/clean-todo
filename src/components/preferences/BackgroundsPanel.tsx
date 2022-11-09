import { useState } from "react";
import { useSelector } from "react-redux";
import bgs from "../../assets/bgs";
import { selectPerferences } from "../../redux/features/perferencesSlice";
import Background from "./Background";

export default function BackgroundsPanel() {
  const perferences = useSelector(selectPerferences);
  let index = bgs.findIndex((bg) => bg === perferences.background);
  const initialize = () =>
    Array(bgs.length)
      .fill(false)
      .map((_, i) => i === index);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

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
