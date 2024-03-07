import React from "react";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
  VStack,
  Show,
  Hide,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  RiUser6Fill,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const Hero = () => {
  return (
    <>
      <Box id="header">
        <Box
          color=" #e9e9e9"
          m="auto"
          w="70%"
          mt={["2rem", "5rem", "10rem", "10rem"]}
        >
          <Heading as="h6" fontSize="25px" mb="15px" color="#4eb1ba">
            Hello I'm
          </Heading>
          <Heading as="h2" mb="1rem">
            FARIDA SULE
          </Heading>
          <Text fontSize={["18px"]} lineHeight="2.3rem" maxW="100%%">
            Front-end developer, knowledgeable in HTML, CSS, GIT, JAVA SCRIPT,
            REACT and GIT. Experienced in collaborating with teams on different
            project using GitHub. passionate about designing responsive website.
            Able to effectively self-manage during independent project, as well
            as collaborate as part of a productive team.
          </Text>
          <Stack direction="row" spacing={4} align="center" mt="20px">
            <Button colorScheme="teal" variant="outline" w="150px">
              <a href="Farida_Sule_Resume.pdf" download="Faridaa Resume.pdf">Download CV</a>
            </Button>
            <Button colorScheme="teal" variant="outline" w="150px">
              <a href="#contact">Contact me</a>
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
