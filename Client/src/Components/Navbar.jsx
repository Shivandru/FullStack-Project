import React, { useState, useRef, useContext } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import MenuComponent from "../Sub-Components/Menu";
import DrawerComponent from "../Sub-Components/DrawerComponent";
import { AuthContext } from "../Auth/AuthContextProvider";
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const btnRef = useRef();
  const toast = useToast();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  async function handleLogout() {
    try {
      const res = await fetch(`https://server-55n8.onrender.com/user/logout`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      if (data.msg === "User logged out successfully" && isLoggedIn) {
        setIsLoggedIn(false);
        toast({
          title: "Logged Out",
          description: "You Logged out successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Box bg="#A0AEC0">
        <Flex
          h="2rem"
          w="100%"
          alignItems={"center"}
          justify="space-between"
          p="1rem"
        >
          <HStack spacing="10rem" alignItems={"center"}>
            <Flex fontSize="0.7rem" ml="5rem">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1216/1216895.png"
                w="1rem"
                h="1rem"
                mr="0.5rem"
              />
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
                to="/login"
                onClick={() => navigate("/")}
              >
                Home
              </Link>
            </Flex>
            <HStack
              // border="1px solid black"
              as={"nav"}
              spacing="3rem"
              display={{ base: "none", md: "flex" }}
            >
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
                to="/login"
                onClick={() => navigate("/register")}
              >
                Register
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
                onClick={() => navigate("/orders")}
              >
                | My Orders
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
              >
                <MenuComponent
                  name={"| My JD"}
                  menuItems={[
                    "Pending Orders | My Q & A",
                    "Repair, Return and Exchange | Concerns",
                    "Mark as Draft",
                    "Markdown Items",
                    "My Jing Bean | My Coupons",
                    "My White Bar | My Finances",
                  ]}
                />
                <ChevronDownIcon />
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
              >
                | JD Members
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
              >
                <MenuComponent
                  name={"| Corporate"}
                  menuItems={[
                    "Business",
                    "Industrial",
                    "Gift Cards",
                    "Preferred",
                    "Rewards",
                  ]}
                />
                <ChevronDownIcon />
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
              >
                <MenuComponent
                  name={"| Customer"}
                  menuItems={[
                    "Help Center",
                    "FAQ",
                    "Customer Service",
                    "Contact Us",
                    "Feedback",
                    "Sitemap",
                    "JD.com",
                  ]}
                />

                <ChevronDownIcon />
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
                onMouseEnter={() => setIsDrawerOpen(true)}
                onMouseLeave={() => setIsDrawerOpen(false)}
              >
                | Site
                <ChevronDownIcon />
                <DrawerComponent
                  btnRef={btnRef}
                  isOpen={isDrawerOpen}
                  onOpen={() => setIsDrawerOpen(true)}
                  onClose={() => setIsDrawerOpen(false)}
                />
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
              >
                {" "}
                Mobile JD.com{" "}
              </Link>
              <Link
                fontSize="0.8rem"
                _hover={{
                  color: "primary",
                }}
                textDecoration="none"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </HStack>
          </HStack>
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            mr="3rem"
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link fontSize="0.8rem">Login</Link>
              <Link fontSize="0.8rem">My Orders</Link>
              <Link fontSize="0.8rem">My JD</Link>
              <Link fontSize="0.8rem">JD Members</Link>
              <Link fontSize="0.8rem">Corporate</Link>
              <Link fontSize="0.8rem">Customer</Link>
              <Link fontSize="0.8rem">Site</Link>
              <Link fontSize="0.8rem">Mobile JD.com </Link>
              <Link fontSize="0.8rem">Website Accessibility</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
