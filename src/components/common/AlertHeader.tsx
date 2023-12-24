import { ModalHeader } from "@chakra-ui/react";
import { GoSettings } from "react-icons/go";
import { RiAlertFill } from "react-icons/ri";

interface AlertTitleProps {
  icon: string;
  title: string;
}

export default function AlertHeader({ icon, title }: AlertTitleProps) {
  return (
    <ModalHeader display="flex" alignItems="center" gap="2">
      {icon === "alert" ? (
        <RiAlertFill />
      ) : icon === "settings" ? (
        <GoSettings />
      ) : (
        ""
      )}
      {title}
    </ModalHeader>
  );
}
