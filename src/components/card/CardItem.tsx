import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import cont from "../../assets/continue.png";
import { Link } from "react-router-dom";
import "./card.css";

const CardItem = ({ img, children }) => {
  return (
    <Card height="60vh" bgPosition="center" bgSize="cover" className="card">
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
        <Image src={img} alt="Hotel Image" className="img" width="100%" />
        <div className="div">
          {children}
          <Link to="/description" className="link">
            <img src={cont} alt="Continue" className="cont-img" />
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardItem;
