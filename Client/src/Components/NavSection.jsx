import {
  Flex,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import Search from "./Search";
import CartSection from "./CartSection";
function NavSection() {
  return (
    <Box bg="ternary">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        p="2rem"
        mb="3rem"
      >
        <Search />
        <CartSection />
      </Flex>
      <Breadcrumb separator="|">
        <BreadcrumbItem fontSize="0.8rem">
          <BreadcrumbLink
            _hover={{
              color: "primary",
            }}
            textDecoration="none"
            href="#"
          >
            Tablet computer
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem fontSize="0.8rem">
          <BreadcrumbLink
            href="#"
            _hover={{
              color: "primary",
            }}
            textDecoration="none"
          >
            Popular headphones
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem fontSize="0.8rem">
          <BreadcrumbLink
            href="#"
            _hover={{
              color: "primary",
            }}
            textDecoration="none"
          >
            mobile phone
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem fontSize="0.8rem">
          <BreadcrumbLink
            href="#"
            _hover={{
              color: "primary",
            }}
            textDecoration="none"
          >
            Data Line
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize="0.8rem" mt="1rem">
        Today's recommendation
      </Text>
    </Box>
  );
}

export default NavSection;
