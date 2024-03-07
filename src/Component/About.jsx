import {
  HStack,
  Heading,
  Box,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import Farimage from "../Farimage/farida.img";

const About = () => {
  return (
    <>
      <section bg="#222930" w={["100%"]} id="about">
        <Box color="#e9e9e9" pt="13rem">
          <Heading textAlign="center" pb="2rem">
            About Me
          </Heading>
          <HStack
            w={["80%", "70%%", "70%"]}
            m="auto"
            fontSize="18px"
            display={["column", "column", "column", "flex"]}
          >
            <Image
              src={Farimage}
              width={["200px", "200px", "300px", "300px"]}
              height={["200px", "200px", "300px", "300px"]}
              borderRadius="50%"
              border="10px solid  #4eb1ba"
              spacing="2rem"
              opacity="0.3rem"
              m="auto"
            ></Image>
            <VStack
              p="25px"
              w="100%"
              textAlign="justify"
              fontSize={["sm", "md", "lg", "xl"]}
              mb="1rem"
            >
              <Text lineHeight="1.4rem">
                Farida Sule is a thriving software developer, passionate about
                creating highly-functional, user-centred softwares .
              </Text>
              <Text lineHeight="1.4rem">
                She is knowledgeable in HTML, CSS, GIT, JAVA SCRIPT, REACT and
                GIT. Experienced in collaborating with teams on different
                project using GitHub. passionate about designing responsive
                website. Able to effectively self-manage during independent
                project, as well as collaborate as part of a productive team.
              </Text>
              <Text lineHeight="1.4rem">
                Farida holds a degree in Electrical and Electronic Engineering
                from Federal University of Technology university Minna and was
                the assistant class rep for my department (2020/2021) and one
                time vice prsident for my faculty Nigerian Universities
                Engineering Students' Association (NUESA) Engineers.
              </Text>
              <Text lineHeight="1.4rem">
                She enjoys taking on challenges, learning new technologies,
                problem-solving and networking. Faridas is currently in the
                front-end developer and spends time developing necessary
                technical and softskills towards self reliance.
              </Text>
            </VStack>
          </HStack>
        </Box>
      </section>
    </>
  );
};

export default About;
