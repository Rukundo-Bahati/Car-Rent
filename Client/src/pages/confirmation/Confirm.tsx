import { Button, Heading, Img, Stack, Text } from "@chakra-ui/react";
import hotel2 from "../../assets/hotel4.jpg";
import Desc from "../../components/description/Desc";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { BsArrowLeft, BsHouse } from "react-icons/bs";
const Confirm = () => {
  const details = [
    { id: 1, name: "2 People" },
    { id: 1, name: "Standard  Kingdom" },
    { id: 1, name: "1 Night" },
    { id: 1, name: "March 15 2022 to March 16 2022" },
    { id: 1, name: "2 People" },
  ];

  const style = {
    listStyleType: "none",
    color: "#aaa",
    marginTop: "1rem",
    borderBottom: "2px solid #ddd",
  };
  return (
    <div style={{ background: "#080124" }}>
      <Nav heading={<BsArrowLeft style={{ fontSize: "2rem" }} />}>
        <Text fontSize="2rem" color="#fff">
          <Link to="/home">
            <BsHouse />
          </Link>
        </Text>
        {/* <Stepper /> */}
      </Nav>
      <Stack justifyContent="center" alignItems="center" my="2rem" h="100vh">
        <Desc>
          <Heading>Hotel Info</Heading>
        </Desc>
        <ul style={style}>
          {details.map((detail) => (
            <li key={detail.id}>{detail.name}</li>
          ))}
        </ul>
        <Text style={{ color: "#fff", margin: "0.4rem", fontSize: "2rem" }}>
          $250
        </Text>
        <Link to="/complete">
          <Button
            colorScheme="blue"
            // onClick={handleSubmit}
            borderRadius="2rem"
            // w="40%"
          >
            Complete
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Confirm;
