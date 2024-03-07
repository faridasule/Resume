import React, { useRef } from 'react'
// import Farimage from "../Farimage/altrufund";
import Tiidecuisine from '../Farimage/Tiidecuisine'
import HarunCloth from '../Farimage/harun.png'
import Resume from '../Farimage/portfolioImg.png'

import { Link } from 'react-router-dom'

import {
  Card,
  CardBody,
  Stack,
  Text,
  Divider,
  Button,
  CardFooter,
  ButtonGroup,
  Heading,
  Image,
  HStack,
  Box,
  VStack,
} from '@chakra-ui/react'

const Works = () => {
  return (
    <>
      <Box bg="#222930" id="work">
        <Heading textAlign="center" pt="5rem" color="#e9e9e9" pb="2rem">
          Projects
        </Heading>
        <Stack
          direction={['column', 'column', 'column', 'row']}
          color="#e9e9e9"
          m={'auto'}
          maxW={['60%', '60%', '60%', '90%']}
          width="80%"
          align="center"
          // p={["3rem", "1rem", "2rem", "3rem"]}
          gap="2rem"
          // display={["column", "column", "flex", "flex"]}
          // justifyContent="space-between"
          // spacing="4"
        >
          <Card
            w="800px"
            maxW="sm"
            bg="#2f4357"
            color="#e9e9e9"
            border="1px solid #e9e9e9"
            className="portfolio-card"
          >
            <CardBody>
              <Image src={HarunCloth} alt="Portfolio" borderRadius="lg" />

              <Stack mt="6" spacing="3">
                <Heading size="md">Harun Cloth</Heading>
             
                <Text color="#4eb1ba" fontSize="16px">
                 HTML, CSS, Typescript, RTK and Next.js
                </Text> 
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme=" #4eb1ba;">
                  <a href="https://github.com/faridasule/Harun-Cloth">GitHub</a>
                </Button>
                <Button variant="ghost" colorScheme="#4eb1ba">
                  <a href="https://harun-cloth.vercel.app">LiveDemo</a>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card
            w="800px"
            maxW="sm"
            bg="#2f4357"
            color="#e9e9e9"
            border="1px solid #e9e9e9"
            className="portfolio-card"
            mb={['2rem', '2rem', '0rem', '0rem']}
          >
            <CardBody>
              <Image src={Resume} alt="resume" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Resume</Heading>
               
                <Text color="#4eb1ba" fontSize="16px">
                  HTML, Chakra UI and React.js
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme=" #4eb1ba;">
                  GitHub
                </Button>
                <Button variant="ghost" colorScheme="#4eb1ba">
                  LiveDemo
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card
            w="800px"
            maxW="sm"
            bg="#2f4357"
            color="#e9e9e9"
            border="1px solid #e9e9e9"
            className="portfolio-card"
          >
            <CardBody>
              <Image src={""} alt="Portfolio" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
       
                <Text color="#4eb1ba" fontSize="16px">
                  HTML, CSS and JS
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme=" #4eb1ba;">
                  <Link href="">GitHub</Link>
                </Button>
                <Button variant="ghost" colorScheme="#4eb1ba">
                  LiveDemo
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Stack>

        <Stack>
          <Button
            colorScheme="teal"
            variant="outline"
            w="200px"
            m=" auto"
            mt="30px"
          >
            Click to view all projects
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default Works
