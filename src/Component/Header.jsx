import React, { useState } from "react";
import "../Component/style.css";
import {
  Flex,
  Spacer,
  Heading,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const [activePage, setActivePage] = useState("#header");

  return (
    <div className="navbar">
      <Flex w="100%" bg="#222930" p={5} className="navbar">
        <Heading color="#4eb1ba" ml="5rem">
          REED
        </Heading>
        <Spacer />
        <nav position="fixed" top={0}>
          <ButtonGroup
            color="#4eb1ba"
            fontSize={20}
            gap="10"
            mr="3rem"
            display={["none", "none", "flex", "flex"]}
          >
            <a
              href="#header"
              onClick={() => setActivePage("#header")}
              className={activePage === "#header" ? "active" : ""}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setActivePage("#about")}
              className={activePage === "#about" ? "active" : ""}
            >
              About
            </a>

            <a
              href="#work"
              onClick={() => setActivePage("#work")}
              className={activePage === "#work" ? "active" : ""}
            >
              Work
            </a>

            <a
              href="#contact"
              onClick={() => setActivePage("#contact")}
              className={activePage === "#contact" ? "active" : ""}
            >
              Contact me
            </a>
          </ButtonGroup>
        </nav>
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          display={["flex", "flex", "none", "none"]}
        >
          <HamburgerIcon colorScheme="#4eb1ba" />
        </Button>{" "}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          display={["flex", "flex", "hidden", "hidden"]}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="#4eb1ba" />

            <DrawerBody bg="#222930" display={["flex", "flex", "hide", "hide"]}>
              <Flex
                flexDir="column"
                gap="5"
                fontSize="1.5rem"
                color="#4eb1ba"
                mt="6rem"
              >
                <Link className="navlinks" to="/">
                  Home
                </Link>

                <Link className="navlinks" to="./about">
                  About
                </Link>

                <Link className="navlinks">Work</Link>

                <Link className="navlinks" to="./contact">
                  Contact me
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </div>
  );
};
