import { Stack, Button, Text, Box } from "@chakra-ui/react";
import v1 from "./v1.mp4";

export default function Banner_My_Profile() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={v1} type="video/mp4" />
      </video>
      <Box position={"absolute"} top={"10%"} left={"25%"}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            fontFamily={"Cinzel"}
            fontSize={50}
            fontWeight={900}
            className="banner_title"
            color={"white.100"}
          >
            Browse your profile details
          </Text>
          <Text
            fontFamily={"Cinzel"}
            fontSize={50}
            fontWeight={900}
            className="banner_title"
            color={"red.100"}
          >
            and create the profile
          </Text>
          <Stack direction={"row"}>
            <a href="#bottom">
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Show me more
              </Button>
            </a>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
