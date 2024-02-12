import React from "react";
import { useCart } from "react-use-cart";
import CartSection from "../Components/CartSection";
import Cart from "../Components/AddToCart";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";
const MyOrders = () => {
  const { getItem } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  getItem();
  return (
    <div>
      <Cart />
      <Button onClick={onOpen} bg="primary">
        Pay
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="auto">Payment Successful</ModalHeader>
          <ModalBody bg="#38A169">
            <Text fontWeight="bold" mb="1rem">
              <Image
                src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif"
                alt="successfull Payment logo"
              />
            </Text>
          </ModalBody>

          <ModalFooter m="auto">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Congrats
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MyOrders;
