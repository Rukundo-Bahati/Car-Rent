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
import landingImg from "../../assets/landing3.jpg";
import Nav from "../../components/nav/Nav";
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

const Landing = () => {
  const navigate = useNavigate();

  const bgImage = `url(${landingImg})`;
  return (
    <Stack m="1rem" bg="#080124">
      <Nav heading="Car Rental">
        <Flex>
          <Button onClick={() => navigate("/login")} border="1px solid #0ef">
            Login
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            bg="var(--bg-btn)"
            mx="1rem"
            border="1px solid #0ef"
          >
            Register
          </Button>
        </Flex>
      </Nav>

      <Grid
        gridTemplateColumns="repeat(2,1fr)"
        bgImage={bgImage}
        bgPosition="cover"
        bgSize="cover"
        height="80vh"
        alignItems="center"
        h="100vh"
      >
        <GridItem
          bg="#15014152"
          h="100%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDir="column"
        >
          <Heading
            textAlign="center"
            color="#fff"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            Find Your Perfect Rental Car
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

        <GridItem></GridItem>
      </Grid>

      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
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
        <h1 style={{ fontSize: "2rem" }}>Featured Cars on our Platform</h1>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          w="100%"
          gap="2rem"
        >
          <GridItem>
            <FeatureCard img={img4}>
              <h1>Toyota Camry</h1>
              <h3>Los Angeles, CA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $50/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  {/* <FaCar /> */}
                  <Text color="#ccc">Automatic</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">5 Seats</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  {/* <FaGasPump /> */}
                  <Text color="#ccc">Petrol</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img1}>
              <h1>Ford Mustang</h1>
              <h3>Miami, FL, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $120/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  {/* <FaCar /> */}
                  <Text color="#ccc">Manual</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">4 Seats</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  {/* <FaGasPump /> */}
                  <Text color="#ccc">Petrol</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img6}>
              <h1>Chevrolet Tahoe</h1>
              <h3>Houston, TX, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $90/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  {/* <FaCar /> */}
                  <Text color="#ccc">Automatic</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">7 Seats</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  {/* <FaGasPump /> */}
                  <Text color="#ccc">Diesel</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img2}>
              <h1>Honda Accord</h1>
              <h3>San Francisco, CA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $60/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  {/* <FaCar /> */}
                  <Text color="#ccc">Automatic</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">5 Seats</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  {/* <FaGasPump /> */}
                  <Text color="#ccc">Hybrid</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img5}>
              <h1>BMW X5</h1>
              <h3>New York, NY, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $150/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  {/* <FaCar /> */}
                  <Text color="#ccc">Automatic</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">5 Seats</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  {/* <FaGasPump /> */}
                  <Text color="#ccc">Petrol</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img3}>
              <h1>Audi A4</h1>
              <h3>Chicago, IL, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $80/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>day</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  {/* <FaCar /> */}
                  <Text color="#ccc">Automatic</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">5 Seats</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  {/* <FaGasPump /> */}
                  <Text color="#ccc">Petrol</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
        </Grid>
      </Stack>

      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        m="2rem"
        gap="1rem"
      >
        <GridItem display="flex" alignItems="center" flexDirection="column">
          <h1 style={{ fontSize: "2rem" }}>Why Rent with Us?</h1>
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
