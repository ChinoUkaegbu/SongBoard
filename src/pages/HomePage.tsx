import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function HomePage() {
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
        <Link to="/login">
          <Button colorScheme="blackAlpha">Get Started</Button>
        </Link>
      </Center>
    </>
  );
}
export default HomePage;
