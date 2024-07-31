import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  const redirectToPinterest = () => {
    const clientId = "1501989";
    const redirectUri = "http://localhost:3000/auth/pinterest/callback"; // backend endpoint
    const responseType = "code";
    const scope = "boards:read,pins:read"; // scope
    const authUrl = `https://www.pinterest.com/oauth/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = authUrl;
  };

  return (
    <>
      <Heading
        textAlign="right"
        padding={20}
        paddingTop={10}
        paddingBottom={4}
        fontSize="8.5vw"
      >
        find the playlist <br />
        that matches your <br />
        vibe
      </Heading>
      <Center>
        <Button colorScheme="blackAlpha" onClick={redirectToPinterest}>
          Get Started
        </Button>
      </Center>
    </>
  );
};
export default HomePage;
