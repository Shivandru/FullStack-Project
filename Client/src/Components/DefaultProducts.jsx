import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";
const DefaultProducts = () => {
  const [productData, setProductData] = useState([]);

  const { addItem } = useCart();
  async function fetchData() {
    let res = await fetch(`http://localhost:3000/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    setProductData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Heading textAlign={"center"}>Recommended For You</Heading>
      <Flex
        wrap={"wrap"}
        justifyContent={"space-around"}
        p="1rem"
        gap="1rem"
        w="100%"
      >
        {productData.map((ele) => (
          <Box
            key={ele._id}
            p="1.5rem"
            h="32rem"
            w="15rem"
            mt="3rem"
            mb="1rem"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            position={"relative"}
          >
            <Text color="primary" textAlign={"center"}>
              {ele.tagline}
            </Text>
            <Heading fontSize={"1.2rem"} p="1rem" textAlign={"center"}>
              {ele.title.shortTitle}
            </Heading>
            <Image src={ele.url} alt="productLogo" w="7rem" m="auto" />
            <Text fontSize={"0.8rem"} mt="0.5rem">
              {ele.title.longTitle}
            </Text>
            <Text fontSize={"0.8rem"} mt="0.5rem" fontWeight={"bold"}>
              Only {ele.quantity} left in stock
            </Text>
            <Flex wrap={"wrap"} gap="0.5rem" align={"center"}>
              <Text fontSize={"0.8rem"} mt="0.5rem" fontWeight={"bold"}>
                MRP: <s style={{ color: "red" }}>₹{ele.price.mrp}</s>
              </Text>
              <Text fontSize="0.8rem" color={"green"} fontWeight={"bold"}>
                up to {ele.price.discount} off
              </Text>
            </Flex>
            <Text fontSize={"0.8rem"} mt="0.5rem" fontWeight={"bold"} mb="1rem">
              Cost: ₹{ele.price.cost}
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
            <Button
              bg="primary"
              position="absolute"
              bottom="0rem"
              mb="1rem"
              onClick={() => addItem(ele)}
            >
              Add To Cart
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default DefaultProducts;
