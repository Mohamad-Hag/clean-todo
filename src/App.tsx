import { Box } from "@chakra-ui/react";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { BiMobile } from "react-icons/bi";
import { useSelector } from "react-redux";
import Alert from "./components/common/Alert";
import NoData from "./components/common/NoData";
import TodoMain from "./components/TodoMain";
import { selectAlert } from "./redux/features/alertSlice";
import "./styles/App.css";
import bg0 from "./assets/bg0.jpg";

function App() {
  const alert = useSelector(selectAlert);

  useEffect(() => {
    // Set Body Background
    let src = `url(${bg0})`;
    if (localStorage.getItem("bg")) src = `url(${localStorage.getItem("bg")})`;
    document.body.style.backgroundImage = src;
  }, []);

  if (isMobile)
    return (
      <Box className="bg-white m-5 rounded-md">
        <NoData
          icon={<BiMobile className="fill-blue-500" size={45} />}
          title="Mobile Not Supported"
          description="Unfortunately, Clean Todo is not supported for mobile devices"
        />
      </Box>
    );

  return (
    <div className="App">
      <div className="app-mask" />
      <TodoMain />
      <Alert
        title={alert.title}
        description={alert.description}
        isOpen={alert.isOpen}
        isOkButtonDisabled={alert.isOkButtonDisabled}
        onClose={alert.onClose}
        onOk={alert.onOk}
      />
    </div>
  );
}

export default App;
