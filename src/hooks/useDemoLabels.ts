import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDemoLabels = () => {
  return useMutation({
    mutationFn: (imageList: String[]) =>
      axios
        .post("https://songboard-back-end.vercel.app/analyze-image", {
          imageList,
        })
        // .post("http://localhost:3000/analyze-image", { imageList })
        .then((res) => res.data),

    onSuccess: (data) => {
      //   console.log(data);
    },
  });
};

export default useDemoLabels;
