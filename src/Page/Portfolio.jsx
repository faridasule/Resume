import { Link } from "react-router-dom";
import "../App.css";
import { Hero } from "../Component/Hero";
import About from "../Component/About";
import Experience from "../Component/Experience";
import { Header } from "../Component/Header";
import { Box, Text, Flex, Heading, Button } from "@chakra-ui/react"; 
import Works from "../Component/Works";
import Social from "../Component/Social";

export const Portfolio = () => {
  return (
    <>
      <Box bg="#222930" maxW="100%">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Works />
        <Flex align="center" direction="column" mt="5rem" id="contact">
          <Heading mt="2rem" color="#e9e9e9">
            Get In Touch With Me
          </Heading>
          <Text color="#4eb1ba" mt="1rem">
            Let's work together
          </Text>
          <Link to="./contact">
            <Button
              colorScheme="teal"
              variant="outline"
              w="200px"
              h="50px"
              mt="5rem"
            >
              Contact me
            </Button>
          </Link>
        </Flex>
        <Social />
        <Box>
          <Text textAlign="center" mt="9rem" color="#e9e9e9" p="2rem">
            Copyright &copy; 2022, REED.All Rights Reserved
          </Text>
        </Box>
      </Box>
    </>
  );
};
