import {
  Button,
  Heading,
  Icon,
  Image,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import landingImg from "../../assets/landig.jpg";
import Nav from "../../components/nav/Nav";
import cont from "../../assets/continue.png";
import { Link } from "react-router-dom";

import "./landing.css";

const Landing = () => {
  const bgImage = `url(${landingImg})`;
  return (
    <Stack m="1rem">
      <Nav heading="HF">
        <Button>Login</Button>
        <Button bg="var(--bg-btn)">Register</Button>
      </Nav>

      <Stack
        justifyContent="center"
        alignItems="center"
        bgImage={bgImage}
        bgPosition="cover"
        bgSize="cover"
        height="100vh"
      >
        <Text fontSize="2rem" textAlign="center" color="#fff">
          Welcome To,
        </Text>
        <Heading textAlign="center">Hotel Finder</Heading>
        <Text fontSize="1.5rem" textAlign="center" color="#fff">
          We have the best recommendations of hotels distributed all across
          Rwanda.
        </Text>
        <Link to="/signup">
          <Img src={cont} color="#fff" className="img" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Landing;
