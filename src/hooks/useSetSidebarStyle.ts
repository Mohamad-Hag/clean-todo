import useIsMobile from "./useIsMobile";

const useSetSidebarStyle = () => {
  const isMobile = useIsMobile();

  const mobileStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    top: 0,
    zIndex: "1000",
    transition: "0s",
  };

  return isMobile ? mobileStyle : undefined;
};

export default useSetSidebarStyle;
