import { Flex, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      p="1.2rem"
      boxShadow="0 0 13px #0ed"
      // alignItems="center"
      // justifyContent="center"
    >
      <Stack>
        <Heading>HF</Heading>
      </Stack>
      <Flex gap="1rem" justifyContent="center" alignItems="center">
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Hotels</Link>
        <Link to="/">Help</Link>
        <Link to="/">Privancy Policy</Link>
      </Flex>
    </Stack>
  );
};

export default Footer;
