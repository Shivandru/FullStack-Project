import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
const Electronics = () => {
  const [electronicData, setElectronicData] = useState([]);
  async function getData() {
    try {
      let res = await fetch(`http://localhost:3000/products/electronics`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      setElectronicData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(electronicData);
  return (
    <>
      <Box>
        <Flex wrap={"wrap"} justifyContent={"space-around"} gap="1rem">
          {electronicData.map((ele) => (
            <Box key={ele._id} p="1rem" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
              <Image src={ele.poster} alt="electronicLogo" w="15rem" />
              <Text fontSize={"0.8rem"}>{ele.appliance_name}</Text>
              <Text fontSize={"0.8rem"}>{ele.power_consumption} watt</Text>
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

export default Electronics;
