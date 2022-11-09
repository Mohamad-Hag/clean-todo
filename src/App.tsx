import { isMobile } from "react-device-detect";
import AppAlert from "./components/common/AppAlert";
import MobileDeviceMessage from "./components/common/MobileDeviceMessage";
import TodoMain from "./components/TodoMain";
import useChangeBackground from "./hooks/useChangeBackground";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useChangeBackground();

  if (isMobile) return <MobileDeviceMessage />;

  return (
    <div className="App">
      <div className="app-mask" />
      <Router>
        <TodoMain />
      </Router>
      <AppAlert />
    </div>
  );
}

export default App;
