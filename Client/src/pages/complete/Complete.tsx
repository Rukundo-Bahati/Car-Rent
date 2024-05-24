import { Button, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div>
      <Stack justifyContent="center" alignItems="center" h="100vh" bg="#080124">
        <Heading>Booking Confirmed</Heading>
        <Link to="/home">
          <Button
            colorScheme="blue"
            borderRadius="2rem"
            // w="40%"
          >
            Back Me To Home
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Complete;
