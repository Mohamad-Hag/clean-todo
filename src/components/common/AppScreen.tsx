import usePassCodeTimeout from "hooks/usePassCodeTimeout";
import AppAlert from "./AppAlert";
import AppMask from "./AppMask";
import AppRouter from "./AppRouter";

export default function AppScreen() {
  usePassCodeTimeout();

  return (
    <div className="preApp">
      <AppMask />
      <AppRouter />
      <AppAlert />
    </div>
  );
}
