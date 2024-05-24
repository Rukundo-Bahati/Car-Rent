import { Heading, Link, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string | ReactNode;
  children: ReactNode;
}

const Nav = ({ heading, children } : Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      boxShadow=" 0 0 13px #0ef"
      // marginBottom="2rem"
      color="#ddd"
      bg="#080124"
      p="1.6rem"
      fontFamily="poppins, sans-serif"
    >
      <Heading>{heading}</Heading>
      <Link>{children}</Link>
    </Stack>
  );
};

export default Nav;
