import { Card, CardBody, Image } from "@chakra-ui/react";

const Desc = ({ children }) => {
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
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
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
