import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const fadeInAnimation = `${fadeIn} 1s ease-in-out`;
