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
const Grocery = () => {
  const [groceryData, setGroceryData] = useState([]);
  const { addItem } = useCart();
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  if (!isLoggedIn) {
    navigate("/login");
  }
  async function getData() {
    try {
      let res = await fetch(
        `https://server-55n8.onrender.com/products/grocery`,
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
      setGroceryData(data);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
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

  console.log(groceryData);
  return (
    <>
      <Box>
        <Box mt="2rem">
          <CartSection />
        </Box>
        <Flex wrap={"wrap"} justifyContent={"space-around"} gap="1rem">
          {groceryData?.map((ele) => (
            <Box
              key={ele._id}
              p="1rem"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Image src={ele.poster} alt="electronicLogo" w="15rem" />
              <Text fontSize={"0.8rem"}>{ele.title}</Text>
              <Text fontSize={"0.8rem"}>category: {ele.food_category}</Text>
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

export default Grocery;
