import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-sans";
import "@fontsource/bricolage-grotesque";

const theme = extendTheme({
  fonts: {
    heading: `'Bricolage Grotesque', sans-serif`,
  },
});

export default theme;
