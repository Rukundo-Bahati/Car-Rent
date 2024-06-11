import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import landingImg from "../../assets/landing3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import discover from "../../assets/discover.jpg";
import img2 from "../../assets/bg.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img1 from "../../assets/img2.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import "./landing.css";
import Footer from "../../components/footer/Footer";
import FeatureCard from "../../components/featurecard/FeatureCard";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const bgImage = `url(${landingImg})`;

  return (
    <Stack m="1rem" bg="#080124">
      <Nav>
        <h1>Car Rental</h1>
        <NavFlex>
          <MenuIcon onClick={handleClick}>
            <FaBars />
          </MenuIcon>
          <NavItems openMenu={openMenu}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/cars">Cars</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavButton
              onClick={() => navigate("/login")}
              border="1px solid #0ef"
            >
              Login
            </NavButton>
            <NavButton
              onClick={() => navigate("/signup")}
              bg="var(--bg-btn)"
              hoverBg="#0069d9"
              border="1px solid #0ef"
            >
              Register
            </NavButton>
          </NavItems>
        </NavFlex>
      </Nav>

      <Grid
        backgroundImage={bgImage}
        backgroundPosition="cover"
        backgroundSize="cover"
        height="80vh"
        alignItems="center"
        h="100vh"
      >
        <GridItem
          bg="#15014171"
          h="100%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          <Text fontSize="1.6rem">Welcome!</Text>
          <Heading
            textAlign="center"
            color="#fff"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            Find Your Perfect Car
          </Heading>
          <Text
            fontSize="1.5rem"
            textAlign="center"
            color="#fff"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          >
            Choose from a wide range of cars for any occasion
          </Text>
          <Link to="/signup">
            <Button
              colorScheme="blue"
              border="2px solid"
              borderRadius="2rem"
              px="5rem"
            >
              Get Started
            </Button>
          </Link>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        justifyContent="center"
        alignItems="center"
        p="1rem"
        gap="2rem"
      >
        <GridItem display="flex" alignItems="center" flexDirection="column">
          <Heading>Become a Host</Heading>
          <Text color="#ccc" m="12px">
            Earn extra by renting out your car...
          </Text>
          <Button border="1px solid #0ef" onClick={() => navigate("/signup")}>
            List Your Car
          </Button>
        </GridItem>
        <GridItem>
          <Image src={img2} borderRadius="2rem" />
        </GridItem>
      </Grid>

      <Stack mx="1rem">
        <Heading as="h1" fontSize="2rem">
          Featured Cars on our Platform
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            // lg: "repeat(3, 1fr)",
          }}
          w="100%"
          gap="2rem"
        >
          {[img4, img1, img6, img2, img5, img3].map((img, index) => (
            <GridItem key={index}>
              <FeatureCard img={img}>
                <Heading as="h1">Car {index + 1}</Heading>
                <Text fontSize="1.3rem" color="#fff">
                  ${index * 20 + 50}/{" "}
                  <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
                </Text>
                <Flex justifyContent="space-evenly" fontSize="1.1rem">
                  <Flex gap="7px" alignItems="center">
                    <Text color="#ccc">Automatic</Text>
                  </Flex>
                  <Flex gap="7px" alignItems="center">
                    <FaUser />
                    <Text color="#ccc">5 Seats</Text>
                  </Flex>
                  <Flex gap="7px" alignItems="center">
                    <Text color="#ccc">Petrol</Text>
                  </Flex>
                </Flex>
              </FeatureCard>
            </GridItem>
          ))}
        </Grid>
      </Stack>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        m="2rem"
        gap="1rem"
      >
        <GridItem display="flex" alignItems="center" flexDirection="column">
          <Heading as="h1" fontSize="2rem">
            Why Rent with Us?
          </Heading>
          <Text color="#ccc" my="9px">
            We offer the best prices and a wide selection of vehicles to choose
            from. Our customer service is available 24/7 to assist you with any
            queries.
          </Text>
          <Button border="1px solid #0ef" onClick={() => navigate("/signup")}>
            Discover More
          </Button>
        </GridItem>
        <GridItem>
          <Image src={discover} borderRadius="2rem" />
        </GridItem>
      </Grid>
      <Footer />
    </Stack>
  );
};

export default Landing;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #080124;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavFlex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.openMenu ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: #080124;
  }
`;

const NavLink = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.4s;
  &:hover {
    text-decoration: underline;
    color: #007bff;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: ${(props) => props.border || "none"};
  background-color: ${(props) => props.bg || "#007bff"};
  color: ${(props) => props.color || "#fff"};
  font-size: 1rem;
  transition: all 0.4s;

  &:hover {
    background-color: ${(props) => props.hoverBg || "#0056b3"};
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
  }
`;
