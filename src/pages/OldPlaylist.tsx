import { Spinner, Text, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
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

  mutate(state.imageList);

  return (
    <>
      {isLoading ? <Spinner /> : null}
      {songs ? <Text>{songs[0][0].song_name}</Text> : null}
      <VStack padding={2}>
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
    </>
  );
};

export default Playlist;
