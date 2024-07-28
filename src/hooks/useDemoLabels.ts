import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDemoLabels = () => {
  return useMutation({
    mutationFn: (imageList: String[]) =>
      axios
        .post("http://localhost:5000/analyze-image", { imageList })
        .then((res) => res.data),

    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useDemoLabels;
