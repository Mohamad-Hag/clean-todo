import AppLoader from "components/common/AppLoader";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import PassCodeScreen from "components/passCodeScreen/PassCodeScreen";
import useChangeBackground from "hooks/useChangeBackground";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import useLockScreen from "hooks/useLockScreen";
import { Suspense, lazy } from "react";
import "styles/App.css";
const AppScreen = lazy(() => import("components/common/AppScreen"));

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

  return (
    <ConditionalRenderer condition={isPassed} replaceWith={<PassCodeScreen />}>
      <Suspense fallback={<AppLoader />}>
        <AppScreen />
      </Suspense>
    </ConditionalRenderer>
  );
}

export default App;
