import React, { useState } from "react";
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
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import background from "../assets/jd-Assets/background.png";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formState);
      const res = await fetch(
        `https://server-55n8.onrender.com/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
          credentials: "include",
          mode: "cors",
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.msg === "User created successfully") {
        toast({
          title: "Account created.",
          description: "We've created your account.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Invalid Credential",
          description: "Please enter valid user details",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error.message);
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
        minH={"100vh"}
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
                Register Yourself
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
                  <FormControl id="name" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formState.password}
                      onChange={handleChange}
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
                    Register
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"blue.400"} onClick={() => navigate("/login")}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
};

export default Register;
