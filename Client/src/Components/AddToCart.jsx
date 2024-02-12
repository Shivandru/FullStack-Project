import React from "react";
import { useCart } from "react-use-cart";
import { MinusIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Button, Box, Text, Heading, Image } from "@chakra-ui/react";
export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty) return <p>Your Cart is Empty</p>;
  console.log(items);
  return (
    <>
      <Text fontSize={"0.8rem"} fontWeight={"bold"}>
        Your Unique Items ({totalUniqueItems})
      </Text>

      <ul>
        {items.map((item) => (
          <Box key={item.id} border={"3px solid black"} p="1rem" m="1rem">
            <Image src={item.poster} w="7rem" />
            <Heading fontSize={"1rem"}>{item.title}</Heading>
            <Text fontSize={"0.8rem"}>Total Item = {item.quantity}</Text>
            <Text fontSize={"0.8rem"}>Item Price = {item.price}</Text>
            <Flex key={item.id} gap="0.4rem">
              <Button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                <MinusIcon />
              </Button>
              <Button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                <AddIcon />
              </Button>
              <Button onClick={() => removeItem(item.id)}>
                <CloseIcon />
              </Button>
            </Flex>
          </Box>
        ))}
      </ul>
    </>
  );
}
