import { Flex, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logoVinyl from "../assets/logo-vinyl.svg";
import StyledNavLink from "./StyledNavLink";

const NavBar = () => {
  return (
    <Flex padding={5}>
      <Image src={logoVinyl} boxSize={10} />
      <Heading variant="normal">SongBoard</Heading>
      <Spacer />
      <HStack spacing="75px">
        <StyledNavLink to="/">
          <Text>Home</Text>
        </StyledNavLink>
        <StyledNavLink to="/demo">
          <Text>{"Get a Playlist (Demo)"}</Text>
        </StyledNavLink>
        <StyledNavLink to="/contact">
          <Text>Let's Talk</Text>
        </StyledNavLink>
        <StyledNavLink to="/about">
          <Text>About</Text>
        </StyledNavLink>
      </HStack>
    </Flex>
  );
};

export default NavBar;
