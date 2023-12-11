import { AlertProps } from "components/common/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectAlert,
  open as openAlert,
  close as closeAlert,
  setTitle as setTitleAlert,
  setIcon as setIconAlert,
  setDescription as setDescriptionAlert,
  setOnOk as setOnOkAlert,
  setOnCancel as setOnCancelAlert,
  setOnClose as setOnCloseAlert,
  enableOkButton as enableOkButtonAlert,
  disableOkButton as disableOkButtonAlert,
} from "redux/features/alertSlice";

export interface AlertHook extends AlertProps {
  open: () => void;
  close: () => void;
  setTitle: (title: string) => void;
  setIcon: (icon: "alert" | "settings") => void;
  setDescription: (description: React.ReactNode) => void;
  setOnOk: (onOk: () => void) => void;
  setOnCancel: (onCancel: () => void) => void;
  setOnClose: (onClose: () => void) => void;
  enableOkButton: () => void;
  disableOkButton: () => void;
}

const useAlert = (): AlertHook => {
  let alert = useSelector(selectAlert);
  let d = useDispatch();

  const open = () => {
    d(openAlert());
  };

  const close = () => {
    d(closeAlert());
  };

  const setTitle = (title: string) => {
    d(setTitleAlert(title));
  };

  const setIcon = (icon: "alert" | "settings") => {
    d(setIconAlert(icon));
  };

  const setDescription = (description: React.ReactNode) => {
    d(setDescriptionAlert(description));
  };

  const setOnOk = (onOk: () => void) => {
    d(setOnOkAlert(onOk));
  };

  const setOnCancel = (onCancel: () => void) => {
    d(setOnCancelAlert(onCancel));
  };

  const setOnClose = (onClose: () => void) => {
    d(setOnCloseAlert(onClose));
  };

  const enableOkButton = () => {
    d(enableOkButtonAlert());
  };

  const disableOkButton = () => {
    d(disableOkButtonAlert());
  };

  return {
    close,
    open,
    setTitle,
    setIcon,
    setDescription,
    setOnOk,
    setOnCancel,
    setOnClose,
    enableOkButton,
    disableOkButton,
    description: alert.description,
    isOpen: alert.isOpen,
    title: alert.title,
    icon: alert.icon,
    isOkButtonDisabled: alert.isOkButtonDisabled,
    onCancel: alert.onCancel,
    onClose: alert.onClose,
    onOk: alert.onOk,
  };
};

export default useAlert;
