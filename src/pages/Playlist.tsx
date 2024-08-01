import { Box, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import useDemoLabels from "../hooks/useDemoLabels";
import _ from "lodash";
import { useLocation } from "react-router-dom";

interface Song {
  song_href: string;
  song_id: string;
  song_name: string;
}

const Playlist = () => {
  const { data, mutate, isLoading } = useDemoLabels();
  const [songs, setSongs] = useState<Song[][] | null>(null);
  const { state } = useLocation();

  // Update songs when data changes
  useEffect(() => {
    if (data) {
      setSongs(data);
    }
  }, [data]);

  // Throttle function to limit iframe rendering
  const throttleRenderIframes = useCallback(
    _.throttle((newSongs: Song[][] | null) => {
      if (newSongs !== songs) {
        setSongs(newSongs); // Update only if there's a change
      }
    }, 2000),
    [songs] // Include songs in dependencies to ensure proper comparison
  );

  useEffect(() => {
    throttleRenderIframes(songs);
  }, [songs, throttleRenderIframes]);

  // Call mutate in useEffect to avoid running on every render
  useEffect(() => {
    if (state?.imageList) {
      mutate(state.imageList);
    }
  }, [state?.imageList, mutate]);
  //   console.log(state.imageList);

  return (
    <Box padding={5}>
      {isLoading ? <Spinner /> : null}
      <Heading fontSize="lg">{"Here's your new playlist :)"}</Heading>
      <br />
      <VStack paddingLeft={2} paddingRight={2}>
        {songs?.map((song_duo) =>
          song_duo?.map((song) => (
            <iframe
              key={song.song_id}
              style={{ borderRadius: "12px" }}
              src={
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

export default Playlist;
