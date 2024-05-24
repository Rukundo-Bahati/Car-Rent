import { Heading, Stack } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Stack
      bg="#080124"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Heading color="#fff">Page Not Found!</Heading>
    </Stack>
  );
};

export default NotFound;
