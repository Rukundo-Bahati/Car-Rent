import { Card, CardHeader, CardBody, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  img: string | "";
  children: ReactNode;
}

const HotelServiceCard = ({ img, children }: Props) => {
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
