import { Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex padding={5}>
      <Heading variant="normal">SongBoard</Heading>
      <Spacer />
      <HStack spacing="75px">
        <Text>Home</Text>
        <Text>Get a Playlist</Text>
        <Text>Let's Talk</Text>
        <Text>About</Text>
      </HStack>
    </Flex>
  );
};

export default NavBar;
