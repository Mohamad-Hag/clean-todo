import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPerferences } from "redux/features/perferencesSlice";

const useChangeBackground = () => {
  const perferences = useSelector(selectPerferences);

  useEffect(() => {
    let src = `url(${perferences.background})`;
    document.body.style.backgroundImage = src;
  }, [perferences.background]);
};

export default useChangeBackground;
