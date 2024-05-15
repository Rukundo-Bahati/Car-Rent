import { Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import hotel2 from "../../assets/m.jpg";
import hotel from "../../assets/m.jpg";
import Desc from "../../components/description/Desc";
import "./hotel.css";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { BsBell } from "react-icons/bs";

const Hotel = () => {
  return (
    <div>
      <Nav heading="Places">
        <BsBell style={{ fontSize: "2rem" }} />
      </Nav>
      <Stack justifyContent="center" alignItems="center" w="90%">
        <Desc img={hotel2}>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            m="1rem"
            direction="row"
            gap={{ base: "3rem", md: "15rem" }}
          >
            <div>
              <Heading fontSize="19px">Taj</Heading>
              <Text color="#ddd" fontSize="14px">
                $20/Night
              </Text>
            </div>
            <div>
              <Img src={hotel} alt="" w="100%" borderRadius="10px" />
            </div>
          </Stack>
          <Text fontSize="17px" color="#ddd">
            Taj Hotels is a chain of luxury hotels and a subsidiary of the
            Indian Hotels Company Limited, headquartered at Express Towers,
            Nariman Point, Mumbai.
          </Text>
          <Text display="flex">9.8 KM</Text>
          <Link to="/reservation">
            <Button className="btn">Book Now</Button>
          </Link>
        </Desc>
      </Stack>
    </div>
  );
};

export default Hotel;
