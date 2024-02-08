import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import CartSection from "../Components/CartSection";
import { useCart } from "react-use-cart";
const Cloths = () => {
  const [clothsData, setClothsData] = useState([]);
  const { addItem } = useCart();
  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/products/cloths`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      setClothsData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(clothsData);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box>
        <Box mt="2rem">
          <CartSection />
        </Box>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="1rem"
          w="100%"
          mt="2rem"
        >
          {clothsData.map((ele) => (
            <Box
              key={ele._id}
              w="15rem"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              p="1rem"
            >
              <Image src={ele.poster} alt="clothsLogo" w="15rem" />
              <Text fontSize={"0.8rem"}>{ele.clothing_type}</Text>
              <Text fontSize={"0.8rem"} fontWeight={"bold"}>
                ₹ {ele.price}
              </Text>
              <Text fontSize={"0.8rem"}>size: {ele.size}</Text>
              <Flex align={"center"} gap="0.5rem">
                <Text fontSize={"0.8rem"}>rating: {ele.rating}</Text>
                <ReactStars
                  count={5}
                  value={ele.rating}
                  edit={false}
                  size={24}
                  activeColor="red"
                />
              </Flex>
              <Button bg="primary" onClick={() => addItem(ele)}>
                Add To Cart
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Cloths;
