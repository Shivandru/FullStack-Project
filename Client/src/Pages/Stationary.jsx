import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContextProvider";
import CartSection from "../Components/CartSection";
import { useCart } from "react-use-cart";
const Stationary = () => {
  const [stationayData, setStationaryData] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  if (!isLoggedIn) {
    navigate("/login");
  }
  async function getData() {
    try {
      let res = await fetch(
        `https://server-55n8.onrender.com/products/stationary`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
        }
      );
      let data = await res.json();
      setLoading(false);
      setStationaryData(data);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(stationayData);
  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <>
      <Box>
        <Box mt="2rem">
          <CartSection />
        </Box>
        <Flex wrap={"wrap"} justifyContent={"space-around"} gap="1rem">
          {stationayData?.map((ele) => (
            <Box
              key={ele._id}
              p="1rem"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Image src={ele.poster} alt="electronicLogo" w="15rem" />
              <Text fontSize={"0.8rem"}>Name: {ele.title}</Text>
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

export default Stationary;
