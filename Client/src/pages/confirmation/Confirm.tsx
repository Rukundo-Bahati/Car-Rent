import { Button, Heading, Grid, Box, Text, Img, Stack } from "@chakra-ui/react";
import carImage from "../../assets/hotel4.jpg";
import Desc from "../../components/description/Desc";
import Nav from "../../components/nav/Nav";
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const details = [
    { id: 1, name: "2 People" },
    { id: 2, name: "Standard Car" },
    { id: 3, name: "1 Day" },
    { id: 4, name: "Pick-up: March 15, 2022" },
    { id: 5, name: "Drop-off: March 16, 2022" },
  ];

  return (
    <Box bg="#080124" minH="100vh">
      <Nav heading={<BsArrowLeft style={{ fontSize: "2rem" }} />}>
        <BsHouse
          style={{ fontSize: "2rem", color: "#fff" }}
          onClick={() => navigate("/home")}
        />
      </Nav>
      <Stack
        justifyContent="center"
        alignItems="center"
        my="2rem"
        px={{ base: "1rem", md: "2rem" }}
      >
        <Desc>
          <Heading color="#fff" textAlign="center" mb="1rem">
            Car Rental Info
          </Heading>
        </Desc>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          justifyContent="center"
          alignItems="center"
          mb="2rem"
          w="100%"
          maxW="800px"
        >
          <Img src={carImage} alt="Car" borderRadius="md" w="100%" h="auto" />
          <Box>
            <Grid
              templateColumns="1fr"
              gap={4}
              textAlign="left"
              color="#aaa"
              borderBottom="2px solid #ddd"
              pb="1rem"
            >
              {details.map((detail) => (
                <Text key={detail.id} py="0.5rem">
                  {detail.name}
                </Text>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Text color="#fff" fontSize="2rem" mb="1rem">
          $150
        </Text>

        <Button
          colorScheme="blue"
          borderRadius="2rem"
          w="90%"
          maxW="20rem"
          onClick={() => navigate("/complete")}
        >
          Complete Booking
        </Button>
      </Stack>
    </Box>
  );
};

export default Confirm;
