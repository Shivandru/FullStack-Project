import { Flex, Text, Image } from "@chakra-ui/react";
function CartSection() {
  return (
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
      <Image
        src="https://cdn-icons-png.flaticon.com/128/649/649931.png"
        color="primary"
        w="1rem"
        h="1rem"
      />
    </Flex>
  );
}

export default CartSection;
