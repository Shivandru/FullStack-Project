import React, { useState, useContext } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContextProvider";
function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { setSearchData } = useContext(AuthContext);

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const queryParams = new URLSearchParams({ title: search });

  async function handleSubmit(e) {
    if (search.length === 0) return alert("Please enter something");
    try {
      e.preventDefault();
      const res = await fetch(
        `https://server-55n8.onrender.com/products/search?${queryParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setSearchData(data);
      navigate("/searchResults");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Box w={{ base: "100%", md: "60%" }} bg="#FFFFFF" p="1rem">
      <form onSubmit={handleSubmit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search Products"
            name="title"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button type="submit" h="1.75rem" size="sm" bg="primary">
              <Search2Icon color="#FFFFFF" />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
}

export default Search;
