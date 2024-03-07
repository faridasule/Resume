import React from "react";
import "../App.css";
import { Heading, Text } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <Text color="#e9e9e9" mt="5rem" textAlign="center">
        What Skills I have
      </Text>
      <Heading color="  #008080" pb="5%" textAlign="center">
        My Experience
      </Heading>
      <div className="container experience__container">
        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Development & Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git & Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Canva</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* UI DESIGN & GRAPHICS */}
        <div className="experience__ui">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Teamwork</h4>
                <small className="text-light">Strong</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Problem Solving</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Creativity</h4>
                <small className="text-light">Solid</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Time Management</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Self-Learner</h4>
                <small className="text-light">Strong</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Flexibility</h4>
                <small className="text-light">Strong</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;

// import React from "react";
// import { Progress, Box, Flex, Spacer, VStack, Stack } from "@chakra-ui/react";

// export const Skill = ({ bgcolor, progress, height }) => {
// const Parentdiv = {
//   height: height,
//   width: "100%",
//   backgroundColor: "whitesmoke",
//   borderRadius: 40,
//   margin: 30,
// };

// const Childdiv = {
//   height: "100%",
//   width: `${progress}%`,
//   backgroundColor: "#4eb1ba",
//   borderRadius: 40,
//   textAlign: "right",
// };

// const progresstext = {
//   padding: 5,
//   color: "black",
//   fontWeight: 900,
// };

//   return (

//     <div style={Parentdiv}>
//       <div style={Childdiv}>
//         <span style={progresstext}>{`${progress}%`}</span>
//       </div>
//     </div>
//   );
// };
