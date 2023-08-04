import { useSelector } from "react-redux";
import { selectAlert } from "redux/features/alertSlice";
import Alert from "./Alert";

export default function AppAlert() {
  const alert = useSelector(selectAlert);

  return (
    <Alert
      title={alert.title}
      description={alert.description}
      isOpen={alert.isOpen}
      isOkButtonDisabled={alert.isOkButtonDisabled}
      onClose={alert.onClose}
      onOk={alert.onOk}
    />
  );
}
