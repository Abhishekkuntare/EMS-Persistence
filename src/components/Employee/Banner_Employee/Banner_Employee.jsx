import { Stack, Button, Text, Box } from "@chakra-ui/react";
import v from "./v.mp4";

export default function Banner_Employee() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={v} type="video/mp4" />
      </video>
      <Box position={"absolute"} top={"12%"} left={"25%"}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            fontFamily={"Cinzel"}
            fontSize={50}
            fontWeight={900}
            className="banner_title"
            color={"white.100"}
            lineHeight={10}
          >
            For employees to
          </Text>
          <Text
            fontFamily={"Cinzel"}
            fontSize={50}
            fontWeight={900}
            className="banner_title"
            color={"blue.100"}
          >
            manage employee details
          </Text>
          <Stack direction={"row"}>
            <a href="#bottom">
              <Button
                bg={"gray.300"}
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
