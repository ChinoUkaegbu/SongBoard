import { Box, Center, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import musicListener from "../assets/music_listener.svg";
import { fadeInAnimation } from "../services/animations";

const AboutPage = () => {
  return (
    <Flex padding={5} animation={fadeInAnimation}>
      <Center>
        <Box paddingLeft={10}>
          <Heading variant="normal" marginBottom={5}>
            a picture speaks a thousand words
          </Heading>
          <Heading>so should your playlists</Heading>
        </Box>
      </Center>
      <Spacer />
      <Image src={musicListener} />
    </Flex>
  );
};

export default AboutPage;
