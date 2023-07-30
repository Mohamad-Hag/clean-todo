import { useSelector } from "react-redux";
import bgs from "../../../../assets/bgs";
import useIsActiveArray from "../../../../hooks/useIsActiveArray";
import { selectPerferences } from "../../../../redux/features/perferencesSlice";
import Background from "./Background";

export default function BackgroundsPanel() {
  const perferences = useSelector(selectPerferences);
  const length = bgs.length;
  const initialIndex = bgs.findIndex((bg) => bg === perferences.background);

  const [isActiveArray, activate] = useIsActiveArray(length, initialIndex);

  return (
    <div className="grid grid-cols-3 gap-4">
      {isActiveArray.map((isActive, index) => (
        <Background
          index={index}
          source={bgs[index]}
          isActive={isActive}
          onSelect={activate}
        />
      ))}
    </div>
  );
}
