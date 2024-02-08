import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
const DrawerComponent = ({ btnRef, isOpen, onOpen, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xl"}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <HStack>
            <DrawerBody>
              <Text>Featured Themes</Text>
              <Text fontSize="0.8rem">JD Finance</Text>
              <Text fontSize="0.8rem">Available WorlWide</Text>
              <Text fontSize="0.8rem">Spikes</Text>
              <Text fontSize="0.8rem">Available in Taiwan</Text>
            </DrawerBody>
            <DrawerBody>
              <Text>Industry Channels</Text>
              <Text fontSize="0.8rem">Mobile</Text>
              <Text fontSize="0.8rem">Computer</Text>
              <Text fontSize="0.8rem">HouseHold</Text>
              <Text fontSize="0.8rem">JD Fresh</Text>
            </DrawerBody>
            <DrawerBody>
              <Text>Life Services</Text>
              <Text fontSize="0.8rem">Coal</Text>
              <Text fontSize="0.8rem">Hydro-Electric</Text>
              <Text fontSize="0.8rem">JD Arrives Home</Text>
              <Text fontSize="0.8rem">Buy Car Insurance</Text>
            </DrawerBody>
            <DrawerBody>
              <Text>More Picks</Text>
              <Text fontSize="0.8rem">JD E-Card</Text>
              <Text fontSize="0.8rem">JD Allianze</Text>
              <Text fontSize="0.8rem">About JD</Text>
              <Text fontSize="0.8rem">JD Retail</Text>
            </DrawerBody>
          </HStack>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
