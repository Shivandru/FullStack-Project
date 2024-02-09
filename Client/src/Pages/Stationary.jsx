import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
const Stationary = () => {
  const [stationayData, setStationaryData] = useState([]);
  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/products/stationary`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });
      let data = await res.json();
      setStationaryData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(stationayData);
  return (
    <>
      <Box>
        <Flex wrap={"wrap"} justifyContent={"space-around"} gap="1rem">
          {stationayData?.map((ele) => (
            <Box
              key={ele._id}
              p="1rem"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Image src={ele.poster} alt="electronicLogo" w="15rem" />
              <Text fontSize={"0.8rem"}>Name: {ele.item_name}</Text>
              <Text fontSize={"0.8rem"}>Colour: {ele.color}</Text>
              <Text fontSize={"0.8rem"}>Material: {ele.material}</Text>
              <Text fontSize={"0.8rem"} fontWeight={"bold"}>
                ₹ {ele.price}
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
              <Button bg="primary">Add To Cart</Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Stationary;
