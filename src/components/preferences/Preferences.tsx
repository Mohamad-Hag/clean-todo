import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  close,
  open,
  setDescription,
  setIcon,
  setOnClose,
  setOnOk,
  setTitle,
} from "redux/features/alertSlice";
import PreferencesButton from "./PreferencesButton";
import PreferencesModal from "./PreferencesModal";
import { GoSettings } from "react-icons/go";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";

export default function Preferences() {
  const { language } = useLanguage();
  const preferencesKey = { key: "P", code: 80 };
  const d = useDispatch();
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#preferences") openPreferences();
  }, []);

  const openPreferences = () => {
    navigate("#preferences");
    d(open());
    d(setIcon("settings"));
    d(setTitle(labels[language.code].preferences));
    d(setDescription(<PreferencesModal />));
    d(setOnOk(closePreferences));
    d(setOnClose(closePreferences));
  };

  const closePreferences = () => {
    navigate("#");
    d(close());
  };

  useKeyboardShortcut(openPreferences, preferencesKey.code, "Shift");

  return (
    <PreferencesButton
      onClick={openPreferences}
      shortcut={`${labels[language.code].shift} ${
        labels[language.code].plusSign
      } ${preferencesKey.key}`}
      label={labels[language.code].preferences}
      icon={<GoSettings />}
    />
  );
}
