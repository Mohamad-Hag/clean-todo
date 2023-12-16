import { isMobileScreen } from "utils/screen-sizes";
import useScreenSize from "./useScreenSize";
import { isMobile } from "react-device-detect";

const useIsMobile = () => {
  const { width } = useScreenSize();
  const isMobileDeviceScreen = isMobileScreen(width) || isMobile;

  return isMobileDeviceScreen;
};

export default useIsMobile;
