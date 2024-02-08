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
import grocery from "../assets/jd-Assets/grocery.png";
import fashion from "../assets/jd-Assets/fashion.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const LeftSection = () => {
  const navigate = useNavigate();
  return (
    <Box w={{ base: "100%", md: "27%" }} bg="#FFFFFF">
      <Box mt="1rem" ml="2rem" p="1rem" w="60%">
        <Image src={rightLogo} alt="rightLogo" w="5rem" h="5rem" />
      </Box>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={electronics} alt="electronics" w="4rem" h="4rem" />
        <Link
          fontSize="0.8rem"
          ml="0.8rem"
          onClick={() => navigate("/electronics")}
        >
          Electronics
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={homeFurniture} alt="homeFurniture" w="4rem" h="4rem" />
        <Link
          fontSize="0.8rem"
          ml="0.8rem"
          onClick={() => navigate("/stationary")}
        >
          Home Furniture
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={toys} alt="toys" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem" onClick={() => navigate("/toys")}>
          Toys
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={grocery} alt="grocery" w="4rem" h="4rem" />
        <Link
          fontSize="0.8rem"
          ml="0.8rem"
          onClick={() => navigate("/grocery")}
        >
          Grocery
        </Link>
        <ChevronRightIcon />
      </Flex>
      <Flex align="center" wrap="wrap" p="1rem">
        <Image src={fashion} alt="fashion" w="4rem" h="4rem" />
        <Link fontSize="0.8rem" ml="0.8rem" onClick={() => navigate("/cloths")}>
          Fashion
        </Link>
        <ChevronRightIcon />
      </Flex>
    </Box>
  );
};

export default LeftSection;
