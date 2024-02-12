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
const Toys = () => {
  const [toysData, setToyData] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  if (!isLoggedIn) {
    navigate("/login");
  }
  async function getData() {
    try {
      let res = await fetch(`https://server-55n8.onrender.com/products/toys`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });
      const data = await res.json();
      setLoading(false);
      setToyData(data);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  console.log(toysData);
  return (
    <>
      <Box>
        <Box mt="2rem">
          <CartSection />
        </Box>
        <Flex wrap={"wrap"} justifyContent={"space-around"} gap="1rem" w="100%">
          {toysData?.map((ele) => (
            <Box key={ele._id} p="1rem">
              <Image src={ele.poster} alt="toysLogo" w="10rem" />
              <Text fontSize={"0.8rem"}>age range: {ele.toy_age_range}</Text>
              <Text fontSize={"0.8rem"}>category: {ele.toy_category}</Text>
              <Text fontSize={"0.8rem"} fontWeight={"bold"}>
                Price: ₹ {ele.price}
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
              <Button bg="primary" key={ele.id} onClick={() => addItem(ele)}>
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
