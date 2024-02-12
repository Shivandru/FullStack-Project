import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContextProvider";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { useCart } from "react-use-cart";
import ReactStars from "react-rating-stars-component";
import CartSection from "../Components/CartSection";
const SearchResults = () => {
  const { searchData } = useContext(AuthContext);
  const { addItem } = useCart();
  return (
    <>
      <Box p="1rem">
        <CartSection />
      </Box>
      <Flex wrap={"wrap"} justifyContent={"space-around"} p="1rem" gap="1rem">
        {searchData?.map((ele) => (
          <Box
            key={ele._id}
            p="1rem"
            w="20rem"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            <Image src={ele.poster} alt="searchPoster" w="15rem" />
            <Text fontSize={"0.8rem"}>{ele.title}</Text>
            <Text fontSize={"0.8rem"} fontWeight={"bold"}>
              category: {ele.category ? ele.category : "General"}
            </Text>
            <Text fontSize={"0.8rem"} fontWeight={"bold"}>
              {ele.price ? "₹ " + ele.price : "40% off"}
            </Text>
            <Flex mb="1rem" align="center" gap="0.5rem">
              <Text fontSize={"0.8rem"}>rating: </Text>
              <ReactStars
                count={5}
                value={ele.rating}
                edit={false}
                size={24}
                activeColor="red"
              />
            </Flex>
            <Button bg="primary" onClick={() => addItem(ele)}>
              Add to cart
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default SearchResults;
