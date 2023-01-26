import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Banner.css";
import GetStarted from "../GetStarted/GetStarted";
import v from "./v.mp4";

const Banner = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src={v} type="video/mp4" />
      </video>
      <Box position={"absolute"} top={"7%"} left={"25%"}>
        <Text
          fontFamily={"Cinzel"}
          fontSize={70}
          fontWeight={900}
          className="banner_title"
          color={"white.100"}
        >
          Employee Management{" "}
        </Text>
        <Text
          fontFamily={"Cinzel"}
          fontSize={70}
          fontWeight={900}
          className="banner_title"
          color={"gray.600"}
        >
          System
        </Text>
        <div className="banner_font">
          <Text fontSize={20} fontWeight={600} color={"gray.600"}>
            since 2022
          </Text>
        </div>
      </Box>

      <GetStarted />
    </>
  );
};

export default Banner;
