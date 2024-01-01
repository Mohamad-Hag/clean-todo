import { isMobileScreen } from "utils/screen-sizes";
import { isMobile } from "react-device-detect";
import useScreenSize from "./useScreenSize";

const useIsMobile = () => {
  const { width } = useScreenSize();
  const isMobileDeviceScreen = isMobileScreen(width) || isMobile;

  return isMobileDeviceScreen;
};

export default useIsMobile;
