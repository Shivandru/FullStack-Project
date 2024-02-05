import { Box, Image } from "@chakra-ui/react";

function SwiperCard({ swiperImage }) {
  return (
    <>
      <Box w="100%" m="auto">
        <Image src={swiperImage} alt="swiperCard1" />
      </Box>
    </>
  );
}

export default SwiperCard;
