import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPreferences } from "redux/features/preferencesSlice";

const useChangeBackground = () => {
  const perferences = useSelector(selectPreferences);

  useEffect(() => {
    let src = `url(${perferences.background})`;
    document.body.style.backgroundImage = src;
  }, [perferences.background]);
};

export default useChangeBackground;
