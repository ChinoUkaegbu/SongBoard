import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: `'Bricolage Grotesque Variable', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Heading: {
      // Define custom variants
      variants: {
        bold: {
          fontFamily: "Bricolage Grotesque Variable",
          fontVariationSettings: '"wght" 700',
        },
        normal: {
          fontFamily: "Bricolage Grotesque Variable",
          fontVariationSettings: '"wght" 500',
        },
      },
      // Set the default variant
      defaultProps: {
        variant: "bold",
      },
    },
  },
});

export default theme;
