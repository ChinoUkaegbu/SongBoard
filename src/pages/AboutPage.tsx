import { Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import musicListener from "../assets/music_listener.svg";

const AboutPage = () => {
  return (
    <Flex padding={5}>
      <Heading>
        a picture speaks a thousand words <br />
        so should your playlists
      </Heading>
      <Spacer />
      <Image src={musicListener} />
    </Flex>
  );
};

export default AboutPage;
