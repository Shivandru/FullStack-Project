import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import CartSection from "../Components/CartSection";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContextProvider";
const Cloths = () => {
  const [clothsData, setClothsData] = useState([]);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    navigate("/login");
  }
  async function getData() {
    try {
      let res = await fetch(
        `https://server-55n8.onrender.com/products/cloths`,
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
      setClothsData(data);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  }
  console.log(clothsData);
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
          {clothsData?.map((ele) => (
            <Box
              key={ele._id}
              w="15rem"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              p="1rem"
            >
              <Image src={ele.poster} alt="clothsLogo" w="15rem" />
              <Text fontSize={"0.8rem"}>{ele.title}</Text>
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
