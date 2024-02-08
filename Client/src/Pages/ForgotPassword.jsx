import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  PinInput,
  PinInputField,
  HStack,
  useToast,
} from "@chakra-ui/react";
import background from "../assets/jd-Assets/background.png";
const ForgotPassword = () => {
  const [userData, setUserData] = useState({ email: "" });
  const [pinValue, setPinValue] = useState(["", "", "", ""]);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [flag, setFlag] = useState(false);
  const toast = useToast();
  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(userData);
      const res = await fetch(`http://localhost:3000/user/get-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      console.log(data);
      setFlag(() => !flag);
      if (
        data.msg ==
        "OTP sent Successfully to your Email. Kindly check your email"
      ) {
        toast({
          title: "OTP sent.",
          description:
            "OTP sent Successfully to your Email. Kindly check your email.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Error while Sending OTP.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handlePinChange(index, value) {
    const newPinValues = [...pinValue];
    newPinValues[index] = value;
    setPinValue(newPinValues);
  }
  function handleNewChange(e) {
    const otp = pinValue.join("");
    setFormState({ ...formState, otp, [e.target.name]: e.target.value });
  }
  async function handleSubmitNewForm(e) {
    try {
      e.preventDefault();
      console.log(formState);
      const res = await fetch(`http://localhost:3000/user/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      console.log(data);
      if (data.msg == "Password updated successfully") {
        toast({
          title: "Updated",
          description: "Password updated successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Error while updating password.",
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
      <Flex
        bgImage={`url(${background})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="100vh"
        w="100%"
        alignItems={"center"}
        justifyContent="center"
        direction="column"
        gap="7rem"
      >
        {flag && (
          <form onSubmit={handleSubmitNewForm}>
            <Box bg="#FFFFFF" p="1rem" textAlign={"center"}>
              <HStack justifyContent={"center"}>
                <PinInput otp>
                  {pinValue.map((value, index) => (
                    <PinInputField
                      key={index}
                      value={value}
                      onChange={(e) => handlePinChange(index, e.target.value)}
                    />
                  ))}
                </PinInput>
              </HStack>
              <Input
                placeholder="Enter your Email"
                type="email"
                name="email"
                w="20rem"
                mt="1rem"
                value={formState.email}
                onChange={handleNewChange}
              />
              <br />
              <Input
                placeholder="New Password"
                type="password"
                name="password"
                w="20rem"
                mt="1rem"
                onChange={handleNewChange}
                value={formState.password}
              />
              <br />
              <Button type="submit" mt="1rem" bg="primary" color="#FFFFFF">
                Submit
              </Button>
              <Button
                mt="1rem"
                bg="primary"
                color="#FFFFFF"
                ml="1rem"
                onClick={() => setFlag(!flag)}
              >
                Resend-Otp
              </Button>
            </Box>
          </form>
        )}
        {!flag && (
          <Box
            textAlign="center"
            bg="#FFFFFF"
            p="2rem"
            w="20rem"
            borderRadius="1rem"
          >
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Enter Email"
                name="email"
                value={userData.email}
                type="email"
                required={true}
                mb="1rem"
                onChange={handleChange}
              />
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg="primary"
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Get-Otp
              </Button>
            </form>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default ForgotPassword;
