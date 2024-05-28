import { Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import car from "../../assets/hotel11.jpg";
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
        mt="2.5rem"
        h="100vh"
      >
        <Heading fontFamily="poppins, sans-serif" mb="">
          Our Cars
        </Heading>
        <Desc>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            m="1rem"
            // direction="row"
            gap={{ base: "3rem", md: "5rem" }}
          >
            <div>
              <Heading fontSize="">Tesla Model</Heading>
              <Text color="#ddd" fontSize="14px">
                Starting at $100/Day
              </Text>
            </div>
            <div>
              <Img src={car} alt="Tesla Model S" w="100%" borderRadius="10px" />
            </div>
          </Flex>
          <Text fontSize="17px" color="#ddd">
            The Tesla Model S is a flagship luxury electric sedan known for its
            cutting-edge technology and impressive performance. Experience the
            future of driving with autopilot features and zero-emission driving.
          </Text>
          <Text display="flex" color="#ddd">
            Available at all major city locations
          </Text>
          <Link to="/reservation">
            <Button className="btn" bg="#080124" border="2px solid #0df">
              Rent Now
            </Button>
          </Link>
        </Desc>
      </Stack>
      <Footer />
    </div>
  );
};

export default Hotel;
