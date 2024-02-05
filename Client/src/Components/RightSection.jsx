import React from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import rightPic from "../assets/jd-Assets/rightPic.png";
import logis from "../assets/jd-Assets/logis.png";
import heart from "../assets/jd-Assets/heart.png";
import cardPay from "../assets/jd-Assets/cardPay.png";
import corporate from "../assets/jd-Assets/corporate.png";
import reviews from "../assets/jd-Assets/reviews.png";
import { useNavigate } from "react-router-dom";
const RightSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        ml={{ base: "0", md: "3rem" }}
        mt={{ base: "2rem", md: "10rem" }}
        w={{ base: "100%", md: "25%" }}
        h="auto"
        bg="#FFFFFF"
        p="1rem"
        mb={{ base: "2rem", md: "0" }}
      >
        <Flex align="center">
          <Image
            src={rightPic}
            alt="rightPic"
            w="5rem"
            h="5rem"
            borderRadius="50%"
          />
          <Text ml="0.5rem" fontSize="0.8rem">
            Hi Welcome to JD
          </Text>
        </Flex>
        <Flex mt="1rem" borderBottom="1px solid grey" pb="2rem">
          <Button
            bg="primary"
            color="#FFFFFF"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            bg="primary"
            color="#FFFFFF"
            ml="1rem"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Flex>
        <Text mt="1rem" fontWeight="600">
          Global News
        </Text>
        <Text fontSize="0.8rem" mb="1rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          officia, cumque, veniam hic asperiores nemo quam, repellat amet odio.
        </Text>
        <Flex
          justify={"space-between"}
          borderTop="1px solid grey"
          mt="2rem"
          pt="1rem"
        >
          <Box>
            <Image src={logis} alt="logis" w="3rem" h="3rem" />
            <Text fontSize="0.8rem" fontWeight={600}>
              Logistics
            </Text>
          </Box>
          <Box>
            <Image src={heart} alt="heart" w="3rem" h="3rem" />
            <Text fontSize="0.8rem" fontWeight={600}>
              After Sales-Policy
            </Text>
          </Box>
        </Flex>
        <Flex justify={"space-between"} mt="2rem">
          <Box>
            <Image src={cardPay} alt="logis" w="3rem" h="3rem" />
            <Text fontSize="0.8rem" fontWeight={600}>
              Internation Payment
            </Text>
          </Box>
          <Box>
            <Image src={corporate} alt="heart" w="3rem" h="3rem" />
            <Text fontSize="0.8rem" fontWeight={600}>
              Corporate Procureme
            </Text>
          </Box>
        </Flex>
        <Box>
          <Image src={reviews} alt="reviews" mt="2rem" />
        </Box>
      </Box>
    </>
  );
};

export default RightSection;
