import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useDemoLabels from "../hooks/useDemoLabels";

const DemoPage = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addLabels = useDemoLabels();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          const images = ref.current.value.split(" ");
          addLabels.mutate(images);
        }
        // navigate("/");
      }}
    >
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Insert files..."
        variant="filled"
      />
    </form>
  );
};

export default DemoPage;
