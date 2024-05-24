import { Button, Heading, Img, Stack, Text } from "@chakra-ui/react";
import hotel2 from "../../assets/m.jpg";
import hotel from "../../assets/m.jpg";
import Desc from "../../components/description/Desc";
import "./hotel.css";
import { Link } from "react-router-dom";
import videoBg from "../../assets/video.mp4";
import Nav from "../../components/nav/Nav";
import { BsBell } from "react-icons/bs";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  return (
    <div style={{ background: "#15014152" }} className="main">
      <Nav heading="Places">
        <BsBell style={{ fontSize: "2rem" }} />
      </Nav>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <Stack
        justifyContent="center"
        alignItems="center"
        className="content"
        h="100vh"
      >
        <Heading fontFamily='poppins, sans-serif' mb='2rem'>Our Hotels</Heading>
        <Desc>
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
          <Text display="flex" color="#ddd">
            9.8 KM
          </Text>
          <Link to="/reservation">
            <Button className="btn" bg="#080124" border="2px solid #0df">
              Book Now
            </Button>
          </Link>
        </Desc>
      </Stack>
      <Footer />
    </div>
  );
};

export default Hotel;
