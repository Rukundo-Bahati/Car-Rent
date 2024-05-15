import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import cont from "../../assets/continue.png";
import { Link } from "react-router-dom";
// import "./card.css";

const Desc = ({ img, children }) => {
  return (
    <Card height="80vh" bgPosition="center" bgSize="cover" w="40%">
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
        <div>{children}</div>
      </CardBody>
    </Card>
  );
};

export default Desc;
