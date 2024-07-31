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

interface Board {
  id: string;
  name: string;
  description: string | null;
  pin_count: number;
  image: string | null;
}

const PinterestSelections = () => {
  const [data, setData] = useState<Board[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the fetchData function inside the useEffect
    const fetchData = () => {
      axios
        .get("http://localhost:3000/pinterest/queries")
        .then((response) => {
          setData(response.data);
          console.log(response.data);

          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    fetchData(); // Call the function to initiate the request
  }, []); // Empty dependency array means this runs once on mount

  return (
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
              <Button variant="solid" colorScheme="blue">
                Select
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default PinterestSelections;
