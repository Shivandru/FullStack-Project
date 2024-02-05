import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import rightLogo from "../assets/jd-Assets/rightLogo.png";
import appliances from "../assets/jd-Assets/appliances.jpeg";
import electronics from "../assets/jd-Assets/electronics.png";
import homeFurniture from "../assets/jd-Assets/homeFurniture.jpeg";
import mobiles from "../assets/jd-Assets/mobiles.png";
import toys from "../assets/jd-Assets/toys.png";
import travel from "../assets/jd-Assets/travel.png";
import twowheelers from "../assets/jd-Assets/twowheelers.png";
import fashion from "../assets/jd-Assets/fashion.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
const LeftSection = () => {
  return (
    <Box w={{ base: "100%", md: "27%" }} bg="#FFFFFF">
      <Box mt="1rem" ml="2rem" p="1rem" w="60%">
        <Image src={rightLogo} alt="rightLogo" w="5rem" h="5rem" />
      </Box>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={appliances} alt="appliances" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Appliances
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={electronics} alt="electronics" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Electronics
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={homeFurniture} alt="homeFurniture" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Home Furniture
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={mobiles} alt="Mobiles" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Mobiles
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={toys} alt="toys" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Toys
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={travel} alt="travel" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Travel
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={twowheelers} alt="2wheelers" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Two-Wheelers
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={fashion} alt="fashion" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem">
          Fashion
        </Link>
        <ChevronRightIcon />
      </Flex>
    </Box>
  );
};

export default LeftSection;
