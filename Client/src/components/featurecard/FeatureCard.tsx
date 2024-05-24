import { Card, CardBody, CardHeader, Image, Stack } from "@chakra-ui/react";
import './featureCard.css'

const FeatureCard = ({ img, children }) => {
  return (
    <Card my="12px" width={{ base: "90%", md: "400px" }} maxWidth="500px"  className="feature">
      <CardHeader p="0">
        <Image
          src={img}
          borderTopRadius="lg"
          objectFit="cover"
          height="150px"
          width="100%"
        />
      </CardHeader>
      <CardBody p="4">
        <Stack direction="column" spacing="3">
          {children}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
