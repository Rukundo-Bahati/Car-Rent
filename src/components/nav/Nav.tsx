import { Heading, Link, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

const Nav = ({ heading, children }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems='center'>
      <Heading>{heading}</Heading>
      <Link>{children}</Link>
    </Stack>
  );
};

export default Nav;
