import TodoMain from "components/TodoMain";
import AppAlert from "components/common/AppAlert";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import MobileDeviceMessage from "components/common/MobileDeviceMessage";
import PassCodeScreen from "components/passCodeScreen/PassCodeScreen";
import useChangeBackground from "hooks/useChangeBackground";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import useLockScreen from "hooks/useLockScreen";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router } from "react-router-dom";
import "styles/App.css";

function App() {
  const lockKey = { key: "L", code: 76 };
  const { lock, isPassed } = useLockScreen();

  useChangeBackground();

  useKeyboardShortcut(
    () => {
      lock();
    },
    lockKey.code,
    "Shift"
  );

  if (isMobile) return <MobileDeviceMessage />;

  return (
    <ConditionalRenderer condition={isPassed} replaceWith={<PassCodeScreen />}>
      <div className="App">
        <div className="app-mask" />
        <Router>
          <TodoMain />
        </Router>
        <AppAlert />
      </div>
    </ConditionalRenderer>
  );
}

export default App;
