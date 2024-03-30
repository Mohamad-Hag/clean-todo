import { useSelector } from "react-redux";
import getBgs from "assets/getBgs";
import useIsActiveArray from "hooks/useIsActiveArray";
import { selectPreferences } from "redux/features/preferencesSlice";
import Background from "./Background";

export default function BackgroundsPanel() {
  const preferences = useSelector(selectPreferences);
  const bgs = getBgs();
  const minifiedBgs = getBgs(true);
  const length = bgs.length;
  const initialIndex = bgs.findIndex((bg) => bg === preferences.background);

  const [isActiveArray, activate] = useIsActiveArray(length, initialIndex);

  return (
    <div className="grid grid-cols-3 gap-4">
      {isActiveArray.map((isActive, index) => (
        <Background
          key={bgs[index]}
          minifiedSource={minifiedBgs[index]}
          index={index}
          source={bgs[index]}
          isActive={isActive}
          onSelect={activate}
        />
      ))}
    </div>
  );
}
