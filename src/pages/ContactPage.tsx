import { useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import useWeb3Forms from "@web3forms/react";
import contactUs from "../assets/contact_us.svg";

const ContactPage = () => {
  const [response, setResponse] = useState<String>("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const accessKey = "a920e531-3623-4e22-aa22-9f565cb12978";
  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "SongBoard",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (message, data) => {
      console.log(message);
      setResponse(message);
    },
    onError: (message, data) => {
      console.log(message);
      setResponse(message);
    },
  });

  return (
    <HStack>
      <Image src={contactUs} />
      <Stack margin={5} flex="1">
        <Heading fontSize={25} paddingBottom={5}>
          how did it go?
        </Heading>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submit({
              name: nameInputRef.current?.value,
              email: emailInputRef.current?.value,
              message: messageInputRef.current?.value,
            });
            const clearInputs = () => {
              [nameInputRef, emailInputRef, messageInputRef].forEach((ref) => {
                if (ref.current) ref.current.value = "";
              });
            };
            clearInputs();
          }}
        >
          <Stack marginRight={5}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                ref={nameInputRef}
                name="name"
                outlineColor="#000000ba"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                ref={emailInputRef}
                name="email"
                outlineColor="#000000ba"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                ref={messageInputRef}
                required
                outlineColor="#000000ba"
              />
            </FormControl>
          </Stack>
          <Button marginTop={7} colorScheme="blackAlpha" type="submit">
            Submit Form
          </Button>
        </form>
        <Text fontSize="xs">{response}</Text>
      </Stack>
    </HStack>
  );
};

export default ContactPage;
