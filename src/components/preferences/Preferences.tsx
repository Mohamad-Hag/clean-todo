import { useDispatch } from "react-redux";
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
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Preferences() {
  const { language } = useLanguage();
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

  return <PreferencesButton onClick={openPreferences} />;
}
