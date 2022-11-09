import { Box } from "@chakra-ui/react";
import { BiMobile } from "react-icons/bi";
import NoData from "./NoData";

export default function MobileDeviceMessage() {
  return (
    <Box className="bg-white m-5 rounded-md">
      <NoData
        icon={<BiMobile className="fill-blue-500" size={45} />}
        title="Mobile Not Supported"
        description="Unfortunately, Clean Todo is not supported for mobile devices"
      />
    </Box>
  );
}
