import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPreferences } from "redux/features/preferencesSlice";

const useChangeBackground = () => {
  const preferences = useSelector(selectPreferences);

  useEffect(() => {
    let src = `url(${preferences.background})`;
    document.body.style.backgroundImage = src;
  }, [preferences.background]);
};

export default useChangeBackground;
