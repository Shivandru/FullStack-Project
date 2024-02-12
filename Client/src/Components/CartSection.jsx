import React, { useRef } from "react";
import {
  Flex,
  Text,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Box,
} from "@chakra-ui/react";
import Cart from "./AddToCart";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
function CartSection() {
  const { totalItems, Items } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  console.log(Items);
  return (
    <>
      <Flex
        align="center"
        w="35%"
        justify="space-around"
        ml="1rem"
        bg="#FFFFFF"
        p={{ base: "0.8rem", md: "0rem" }}
        mt={{ base: "0.5rem", md: "0rem" }}
      >
        <Button color="primary" ref={btnRef} onClick={onOpen}>
          My Cart
        </Button>
        <Flex p="1rem">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/649/649931.png"
            color="primary"
            w="1rem"
            h="1rem"
          />
          <sup style={{ fontWeight: "bold", fontSize: "0.8rem" }}>
            {totalItems}
          </sup>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => navigate("/orders")}>
              Check Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartSection;
