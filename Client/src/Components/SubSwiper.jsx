import { Flex, Image, Box } from "@chakra-ui/react";
import subswiper2 from "../assets/jd-Assets/subswiper2.png";
import subswiper1 from "../assets/jd-Assets/subswiper1.png";
function SubSwiper() {
  return (
    <>
      <Flex w="100%">
        <Box>
          <Image src={subswiper1} alt="subswiperlogo" />
        </Box>
        <Box>
          <Image src={subswiper2} alt="subswiperlogo" />
        </Box>
      </Flex>
    </>
  );
}

export default SubSwiper;
