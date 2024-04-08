import AppLoader from "components/common/AppLoader";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import PassCodeScreen from "components/passCodeScreen/PassCodeScreen";
import useAppStartup from "hooks/useAppStartup";
import { Suspense, lazy } from "react";
import "styles/App.css";
const AppScreen = lazy(() => import("components/common/AppScreen"));

function App() {
  const { isPassed } = useAppStartup();

  return (
    <ConditionalRenderer condition={isPassed} replaceWith={<PassCodeScreen />}>
      <Suspense fallback={<AppLoader />}>
        <AppScreen />
      </Suspense>
    </ConditionalRenderer>
  );
}

export default App;
