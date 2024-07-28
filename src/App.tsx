import { Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Heading textAlign="right" padding={20} fontSize="9vw">
        find the playlist <br />
        that matches your <br />
        vibe
      </Heading>
    </>
  );
}
export default App;
