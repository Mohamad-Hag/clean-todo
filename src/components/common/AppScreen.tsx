import AppAlert from "./AppAlert";
import AppMask from "./AppMask";
import AppRouter from "./AppRouter";

export default function AppScreen() {
  return (
    <div className="App">
      <AppMask />
      <AppRouter />
      <AppAlert />
    </div>
  );
}
