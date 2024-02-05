import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
function Search() {
  return (
    <Box w={{ base: "100%", md: "60%" }} bg="#FFFFFF">
      <InputGroup size="md">
        <Input pr="4.5rem" type="text" placeholder="Search Products" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" bg="primary">
            <Search2Icon color="#FFFFFF" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Search;
