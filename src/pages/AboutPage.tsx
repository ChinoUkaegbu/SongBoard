import { Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import musicListener from "../assets/music_listener.svg";
import { fadeInAnimation } from "../services/animations";

const AboutPage = () => {
  return (
    <Flex padding={5} animation={fadeInAnimation}>
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
