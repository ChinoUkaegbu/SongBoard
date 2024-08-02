import { Flex, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoVinyl from "../assets/logo-vinyl.svg";

const NavBar = () => {
  return (
    <Flex padding={5}>
      <Image src={logoVinyl} boxSize={10} />
      <Heading variant="normal">SongBoard</Heading>
      <Spacer />
      <HStack spacing="75px">
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/demo">
          <Text>{"Get a Playlist (Demo)"}</Text>
        </Link>
        <Link to="/contact">
          <Text>Let's Talk</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
