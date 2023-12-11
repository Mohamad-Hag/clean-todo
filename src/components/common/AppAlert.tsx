import { useSelector } from "react-redux";
import { selectAlert } from "redux/features/alertSlice";
import Alert from "./Alert";
import useAlert from "hooks/useAlert";

export default function AppAlert() {
  const {
    title,
    description,
    isOpen,
    isOkButtonDisabled,
    onClose,
    onOk,
    icon,
  } = useAlert();

  return (
    <Alert
      title={title}
      description={description}
      isOpen={isOpen}
      isOkButtonDisabled={isOkButtonDisabled}
      onClose={onClose}
      onOk={onOk}
      icon={icon}
    />
  );
}
