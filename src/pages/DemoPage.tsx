import {
  Box,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDemoLabels from "../hooks/useDemoLabels";

import _ from "lodash";

interface Song {
  song_href: string;
  song_id: string;
  song_name: string;
}

const DemoPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const { data, mutate, isLoading } = useDemoLabels();

  const [songs, setSongs] = useState<Song[][] | null>(null);

  // Effect to update songs when data changes
  useEffect(() => {
    if (data) {
      setSongs(data);
    }
  }, [data]);

  // Throttle function to limit iframe rendering so we don't get rate limited
  const throttleRenderIframes = useCallback(
    _.throttle((songs: Song[][] | null) => {
      setSongs(songs); // Trigger re-render to show iframes
    }, 2000), // Adjust throttle delay as needed
    []
  );

  useEffect(() => {
    throttleRenderIframes(songs);
  }, [songs, throttleRenderIframes]);

  // function to validate if the URL ends with an image file extension
  const endsWithImageExtension = (url: string) => {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
  };

  // function to validate if the URL is a valid URL
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Box padding={5}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            const imageUrls = ref.current.value
              .split(" ")
              .filter(Boolean)
              .slice(0, 10);

            for (const imageUrl of imageUrls) {
              if (!isValidUrl(imageUrl)) {
                setError("Invalid URL format");
                return;
              }
              if (!endsWithImageExtension(imageUrl)) {
                setError("URL does not point to an image");
                return;
              }
            }

            setError("");
            ref.current.value = "";
            console.log("Valid image URLs:", imageUrls);
            mutate(imageUrls);
          }
        }}
      >
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Insert image urls..."
          variant="filled"
          required
        />
        <Text paddingLeft={1} color="#ee2c2c">
          {error}
        </Text>
      </form>

      {isLoading ? (
        <Flex>
          <Text paddingRight={2}>Loading</Text>
          <Spinner />
        </Flex>
      ) : null}

      {songs ? (
        <Heading paddingTop={2} paddingBottom={5} fontSize="lg">
          {"Here's your new playlist :)"}
        </Heading>
      ) : null}
      <VStack paddingLeft={2} paddingRight={2}>
        {songs?.map((song_duo) =>
          song_duo?.map((song) => (
            <iframe
              key={song.song_id}
              style={{ borderRadius: "12px" }}
              src={
                //sometimes it returns both tracks and episodes
                song.song_href.includes("episode")
                  ? `https://open.spotify.com/embed/episode/${song.song_id}?utm_source=generator`
                  : `https://open.spotify.com/embed/track/${song.song_id}?utm_source=generator`
              }
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default DemoPage;
