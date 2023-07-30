import { Box } from "@chakra-ui/react";
import { BiMobile } from "react-icons/bi";
import NoData from "./NoData";
import labels from "../../data/json/ui-labels.json";

export default function MobileDeviceMessage() {
  return (
    <Box className="bg-white m-5 rounded-md">
      <NoData
        icon={<BiMobile className="fill-blue-500" size={45} />}
        title={labels.mobileNotSupported}
        description={labels.cleanTodoNotSupported}
      />
    </Box>
  );
}
