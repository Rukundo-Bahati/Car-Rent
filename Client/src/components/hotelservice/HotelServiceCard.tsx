import { Card, CardHeader, CardBody, Image, Text } from "@chakra-ui/react";

const HotelServiceCard = ({ img, children }) => {
  return (
    <Card display="flex">
      <CardHeader>
        <Image src={img} />
      </CardHeader>
      <CardBody>
        <Text>{children}</Text>
      </CardBody>
    </Card>
  );
};

export default HotelServiceCard;
