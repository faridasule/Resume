import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Flex,
  Box,
  VStack,
  Stack,
  Card,
  CardBody,
  Text,
  Spacer,
  IconButton,
  Link,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";

import "../App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j0sr052",
        "template_u5p7596",
        form.current,
        "cFUpN1bcyWytIrgak"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("succesfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box bg="#222930" pb="1.5%" onSubmit={sendEmail}>
      <Box id="contact" bg="#222930">
        <Heading textAlign="center" color=" #E6FFFA" pt="2%">
          Contact Me
        </Heading>

        <HStack
          m=" 0px auto"
          mt="2%"
          w="80%"
          // maxW="100rem"
          justifyContent="center"
          color="#E6FFFA"
          display={["column", "column", "column", "flex"]}
        >
          <Stack w={["90%", "90%", "90%", "40%"]}>
            <Box mb="0.5rem">
              <Card
                bg="  #2f4357"
                borderRadius="2rem"
                p={[".5rem", ".5rem", "1rem", "2rem"]}
              >
                <CardBody
                  // p={[".5rem", ".5rem", ".5rem", "2rem"]}
                  borderRadius="5px"
                  b="#4eb1ba"
                  align="center"
                  color=" #E6FFFA"
                  h="50%"
                >
                  <Text textAlign="center">Email</Text>
                  <p textAlign="center">faridasule24@gmail.com</p>
                  <Link textAlign="center">send a message</Link>
                </CardBody>
              </Card>
            </Box>

            <Box>
              {" "}
              <Card
                bg=" #2f4357"
                borderRadius="2rem"
                p={[".5rem", ".5rem", ".5rem", "2rem"]}
                color=" #E6FFFA"
              >
                <CardBody align="center" h="50%">
                  <Text textAlign="center" color=" #e9e9e9">
                    PhoneNumber
                  </Text>
                  <p color=" #e9e9e9">+2348051744986</p>
                  <Link color=" #e9e9e9" textAlign="center">
                    send a message
                  </Link>
                </CardBody>
              </Card>
            </Box>
          </Stack>
          <Box w={["90%", "90%", "90%", "50%"]}>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Fullname</FormLabel>
                <Input
                  type="name"
                  h="50px"
                  focusBorderColor="#E6FFFA"
                  name="from_name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeContent="enter your email"
                  h="50px"
                  name="from_email"
                  focusBorderColor="#E6FFFA"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Message...."
                  h="300px"
                  resize="none"
                  mb="2rem"
                  name="message"
                  focusBorderColor="#E6FFFA"
                />
              </FormControl>
              <Button
                colorScheme="teal"
                variant="outline"
                w="150px"
                h="50px"
                textAlign="center"
                color="#e9e9e9"
                border="1px solid #E6FFFA"
                id="btn-contact"
                alignItems="center"
                type="submit"
              >
                Send
              </Button>
            </form>
          </Box>
          {/* <Spacer gap="2rem"></Spacer> */}
        </HStack>
      </Box>
    </Box>
  );
};
