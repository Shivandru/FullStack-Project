import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
const Toys = () => {
  const [toysData, setToyData] = useState([]);
  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/products/toys`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setToyData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(toysData);
  return (
    <>
      <Box>
        <Flex wrap={"wrap"} justifyContent={"space-around"} gap="1rem" w="100%">
          {toysData.map((ele) => (
            <Box key={ele._id} p="1rem">
              <Image src={ele.poster} alt="toysLogo" w="10rem" />
              <Text fontSize={"0.8rem"}>age range: {ele.toy_age_range}</Text>
              <Text fontSize={"0.8rem"}>category: {ele.toy_category}</Text>
              <Text fontSize={"0.8rem"} fontWeight={"bold"}>
                Price: ₹ {ele.toy_price}
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
              <Button bg="primary" key={ele._id}>
                Add To Cart
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Toys;
