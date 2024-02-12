import React, { useState, useContext } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
  useToast,
  Image,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import background from "../assets/jd-Assets/background.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContextProvider";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({ name: "", email: "", password: "" });
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await fetch(`https://server-55n8.onrender.com/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      if (data.msg === "User Logged in successfully") {
        setIsLoggedIn(true);
        toast({
          title: "Logged In",
          description: "You Logged in Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setIsLoggedIn(false);
        toast({
          title: "Invalid Credential",
          description: "Please enter valid credentials",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error.message);
      setIsLoggedIn(false);
    }
  }

  return (
    <Box
      bgImage={`url(${background})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="100vh"
      w="100%"
    >
      <Flex
        h="100vh"
        align={"center"}
        justify={"center"}
        position={"absolute"}
        right="4rem"
        bottom="3rem"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"} color="#FFFFFF">
                Login
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={login.name}
                    />
                  </FormControl>
                </Box>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={login.email}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      value={login.password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Login
                  </Button>
                  <Link
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    p="0.75rem"
                    href="https://server-55n8.onrender.com/login"
                  >
                    <Flex align={"center"}>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                        w="2rem"
                      />
                      <Text fontSize={"0.8rem"} pl="0.5rem">
                        Continue with google
                      </Text>
                    </Flex>
                  </Link>
                  <Link
                    textAlign={"center"}
                    onClick={() => navigate("/resetpassword")}
                  >
                    Forgot Password ?
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
};

export default Login;
