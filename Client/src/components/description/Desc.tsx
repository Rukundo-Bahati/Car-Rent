import { Card, CardBody } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Desc = ({ children }: Props) => {
  return (
    <Card
      // height="100%"
      bgPosition="center"
      bgSize="cover"
      w={{ base: "", md: "40%" }}
      // alignItems="center"
      // justifyContent="center"
      // margin="2rem"
      bg="#080124"
      boxShadow="0 0 13px #0ef"
    >
      <CardBody
        textAlign="center"
        fontSize="2rem"
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        className="body"
        overflow="hidden"
      >
        {/* <Image alt="Hotel Image" /> */}
        {children}
      </CardBody>
    </Card>
  );
};

export default Desc;
