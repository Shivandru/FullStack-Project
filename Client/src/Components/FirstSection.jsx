import React from "react";
import { Heading, Text, Box, Flex, Image } from "@chakra-ui/react";
import cup from "../assets/jd-Assets/cup.png";
import cpu from "../assets/jd-Assets/cpu.png";
import phones from "../assets/jd-Assets/phones.png";
import plugs from "../assets/jd-Assets/plugs.png";
import mask from "../assets/jd-Assets/mask.png";
import candy from "../assets/jd-Assets/candy.png";
import phoneChannel from "../assets/jd-Assets/phoneChannel.jpeg";
import hotpot from "../assets/jd-Assets/hotpot.jpeg";
import food from "../assets/jd-Assets/food.jpeg";
import tv from "../assets/jd-Assets/tv.png";
import soaps from "../assets/jd-Assets/soaps.jpeg";
import cloth from "../assets/jd-Assets/cloth.jpeg";
const FirstSection = () => {
  return (
    <>
      <Heading textAlign={"center"} mb="2rem">
        "Beijing" is carefully selected
      </Heading>
      <Flex w="100%" wrap={"wrap"} justifyContent={"center"}>
        <Box p="1rem">
          <Image src={cup} alt="cup" w="10rem" />
        </Box>
        <Box p="1rem">
          <Image src={cpu} alt="cpu" w="15rem" />
        </Box>
        <Box p="1rem">
          <Image src={phones} alt="phones" w="15rem" />
        </Box>
        <Box p="1rem">
          <Image src={plugs} alt="plugs" w="15rem" />
        </Box>

        <Box p="1rem">
          <Image src={candy} alt="candy" w="15rem" />
        </Box>
        <Box p="1rem">
          <Image src={mask} alt="mask" w="15rem" />
        </Box>
      </Flex>
      <Heading textAlign={"center"} mt="2rem">
        Channel Square
      </Heading>
      <Flex align="center" wrap={"wrap"} justifyContent={"center"}>
        <Box p="1rem">
          <Image src={phoneChannel} alt="phoneLogo" w="20rem" h="20rem" />
        </Box>
        <Box p="1rem">
          <Image src={hotpot} alt="hotpot" w="20rem" h="20rem" />
        </Box>
        <Box p="1rem">
          <Flex p="1rem" wrap={"wrap"} justifyContent={"center"}>
            <Box p="0.5rem">
              <Image src={food} alt="food" w="15rem" h="10rem" />
            </Box>
            <Box p="0.5rem">
              <Image src={cloth} alt="cloth" w="15rem" h="10rem" mr="1rem" />
            </Box>
          </Flex>
          <Flex p="1rem" wrap={"wrap"} justifyContent={"center"}>
            <Box p="0.5rem">
              <Image src={tv} alt="food" w="15rem" h="10rem" />
            </Box>
            <Box p="0.5rem">
              <Image src={soaps} alt="cloth" w="15rem" h="10rem" mr="1rem" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default FirstSection;
