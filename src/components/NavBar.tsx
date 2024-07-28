import { Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex padding={5}>
      <Heading variant="normal">SongBoard</Heading>
      <Spacer />
      <HStack spacing="75px">
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/demo">
          <Text>{"Get a Playlist (Demo)"}</Text>
        </Link>
        <Text>Let's Talk</Text>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
