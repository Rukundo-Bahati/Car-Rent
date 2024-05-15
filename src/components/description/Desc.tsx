import { Card, CardBody, CardHeader, Image, Stack } from "@chakra-ui/react";

const Desc = ({ img, children }) => {
  return (
    <Card height="100%" bgPosition="center" bgSize="cover" w="40%">
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
        <Image src={img} alt="Hotel Image" />
        {children}
      </CardBody>
    </Card>
  );
};

export default Desc;
