import React from "react";
import Navbar from "../Components/Navbar";
import SwipingComponent from "../Components/SwipingComponent";
import {
  Container,
  Flex,
  Box,
  MenuDescendantsProvider,
} from "@chakra-ui/react";
import LeftSection from "../Components/LeftSection";
import RightSection from "../Components/RightSection";
import FirstSection from "../Components/FirstSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Box bg="ternary">
      <Container maxW="7xl" h="auto" bg="ternary">
        <Flex
          w="100%"
          h="auto"
          bg="ternary"
          direction={{ base: "column", md: "row" }}
        >
          <LeftSection />
          <SwipingComponent />
          <RightSection />
        </Flex>
        <FirstSection />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
