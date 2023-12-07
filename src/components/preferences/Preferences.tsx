import { useDispatch } from "react-redux";
import {
  close,
  open,
  setDescription,
  setIcon,
  setOnOk,
  setTitle,
} from "redux/features/alertSlice";
import PreferencesButton from "./PreferencesButton";
import PreferencesModal from "./PreferencesModal";
import labels from "data/json/ui-labels.json";

export default function Preferences() {
  const d = useDispatch();

  const openPreferences = () => {
    d(open());
    d(setIcon("settings"));
    d(setTitle(labels.preferences));
    d(setDescription(<PreferencesModal />));
    d(setOnOk(() => d(close())));
  };

  return <PreferencesButton onClick={openPreferences} />;
}
