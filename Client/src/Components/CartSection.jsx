import { Flex, Text, Image, Link, Box } from "@chakra-ui/react";
import Cart from "./AddToCart";
function CartSection() {
  return (
    <>
      <Flex
        align="center"
        w="35%"
        justify="space-around"
        ml="1rem"
        bg="#FFFFFF"
        p={{ base: "0.8rem", md: "0rem" }}
        mt={{ base: "0.5rem", md: "0rem" }}
      >
        <Text color="primary">My Cart</Text>
        <Flex>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/649/649931.png"
            color="primary"
            w="1rem"
            h="1rem"
          />
          <sup>
            <Cart />
          </sup>
        </Flex>
      </Flex>
    </>
  );
}

export default CartSection;
