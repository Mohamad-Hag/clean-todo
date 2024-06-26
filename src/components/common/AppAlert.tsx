import useAlert from "hooks/useAlert";
import Alert from "./Alert";

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
