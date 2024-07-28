import { Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex padding={5}>
      <Heading variant="normal">SongBoard</Heading>
      <Spacer />
      <HStack spacing="75px">
        <Text>Home</Text>
        <Text>Get a Playlist</Text>
        <Text>Let's Talk</Text>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
