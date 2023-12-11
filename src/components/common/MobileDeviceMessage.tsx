import { Box } from "@chakra-ui/react";
import { BiMobile } from "react-icons/bi";
import NoData from "./NoData";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function MobileDeviceMessage() {
  const { language } = useLanguage();
  
  return (
    <Box className="bg-white m-5 rounded-md">
      <NoData
        icon={<BiMobile className="fill-blue-500" size={45} />}
        title={labels[language.code].mobileNotSupported}
        description={labels[language.code].cleanTodoNotSupported}
      />
    </Box>
  );
}
