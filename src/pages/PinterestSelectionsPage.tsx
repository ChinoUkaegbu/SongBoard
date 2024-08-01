import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import image_placeholder from "../assets/placeholder-image.png";
import { useNavigate } from "react-router-dom";

interface Board {
  id: string;
  name: string;
  description: string | null;
  pin_count: number;
  image: string | null;
}
axios.defaults.withCredentials = true;

const PinterestSelections = () => {
  const [data, setData] = useState<Board[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [boardId, setBoardId] = useState("");
  const [imageList, setImageList] = useState<String[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Define the fetchData function inside the useEffect
    const fetchData = () => {
      axios
        .get("http://localhost:3000/pinterest/queries/boards")
        .then((response) => {
          setData(response.data);
          // console.log(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    fetchData(); // Call the function to initiate the request
  }, []); // Empty dependency array means this runs once on mount

  const selectBoard = (board_id: string) => {
    setBoardId(board_id); // Update the board ID state

    axios
      .get(`http://localhost:3000/pinterest/queries/pins?board_id=${board_id}`) // Use board_id directly
      .then((res) => {
        setImageList(res.data);
        navigate("/playlist", { state: { imageList: res.data } }); // Pass imageList as res.data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Optionally handle error here
      });
  };

  return (
    <>
      <Stack padding={2} spacing={4}>
        <Text>PinterestSelections</Text>
        {data?.map((board) => (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            key={board.id}
          >
            <Image
              objectFit="cover"
              boxSize="200px"
              src={board.image ? board.image : image_placeholder}
              alt={`${board.name} cover`}
            />

            <Stack flex="1">
              <CardBody>
                <Heading size="md">{board.name}</Heading>
                <Text py="2">{board.description ? board.description : ""}</Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => selectBoard(board.id)}
                >
                  Select
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default PinterestSelections;
