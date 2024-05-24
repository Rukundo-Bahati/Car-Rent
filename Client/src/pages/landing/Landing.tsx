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
import landingImg from "../../assets/landing2.jpg";
import Nav from "../../components/nav/Nav";
import { Link, useNavigate } from "react-router-dom";
import { FaBed, FaUser, FaArrowUp } from "react-icons/fa";
import discover from "../../assets/discover.png";
import img2 from "../../assets/bg.png";
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
      <Nav heading="HF">
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
            Find an apartment for your vacation
          </Heading>
          <Text
            fontSize="1.5rem"
            textAlign="center"
            color="#fff"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          >
            We have several thousand apartments for every taste in every corner
            of the globe
          </Text>

          <Link to="/signup">
            <Button
              colorScheme="blue"
              border="2px solid"
              borderRadius="2rem"
              // w="40%"
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
          <Heading>Try Hosting with us</Heading>
          <Text color="#ccc" m="12px">
            Earn extra just by renting your property...
          </Text>
          <Button border="1px solid #0ef" onClick={() => navigate("/signup")}>
            Become A Host
          </Button>
        </GridItem>
        <GridItem>
          <Image src={img2} />
        </GridItem>
      </Grid>

      <Stack mx="1rem">
        <h1 style={{ fontSize: "2rem" }}>Featured Properties on our Listing</h1>
        <Grid
          // gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          // // gap="2rem"
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
              <h1>Well Furnished Apartment</h1>
              <h3>100 Smart Street, LA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $200/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>6nights</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  <FaBed />
                  <Text color="#ccc">4 Beds</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">8 Sleeps</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaArrowUp />
                  <Text color="#ccc">1,350 Sq Ft</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img1}>
              <h1>Well Furnished Apartment</h1>
              <h3>100 Smart Street, LA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $200/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>6nights</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  <FaBed />
                  <Text color="#ccc">4 Beds</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">8 Sleeps</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaArrowUp />
                  <Text color="#ccc">1,350 Sq Ft</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img6}>
              <h1>Well Furnished Apartment</h1>
              <h3>100 Smart Street, LA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $200/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>6nights</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  <FaBed />
                  <Text color="#ccc">4 Beds</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">8 Sleeps</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaArrowUp />
                  <Text color="#ccc">1,350 Sq Ft</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img2}>
              <h1>Well Furnished Apartment</h1>
              <h3>100 Smart Street, LA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $200/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>6nights</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  <FaBed />
                  <Text color="#ccc">4 Beds</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">8 Sleeps</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaArrowUp />
                  <Text color="#ccc">1,350 Sq Ft</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img5}>
              <h1>Well Furnished Apartment</h1>
              <h3>100 Smart Street, LA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $200/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>6nights</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  <FaBed />
                  <Text color="#ccc">4 Beds</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">8 Sleeps</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaArrowUp />
                  <Text color="#ccc">1,350 Sq Ft</Text>
                </Flex>
              </Flex>
            </FeatureCard>
          </GridItem>
          <GridItem>
            <FeatureCard img={img3}>
              <h1>Well Furnished Apartment</h1>
              <h3>100 Smart Street, LA, USA</h3>
              <Text fontSize="1.3rem" color="#fff">
                $200/{" "}
                <span style={{ fontSize: "1rem", color: "#0ed" }}>6nights</span>
              </Text>
              <Flex justifyContent="space-evenly" fontSize="1.1rem">
                <Flex gap="7px" alignItems="center">
                  <FaBed />
                  <Text color="#ccc">4 Beds</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaUser />
                  <Text color="#ccc">8 Sleeps</Text>
                </Flex>
                <Flex gap="7px" alignItems="center">
                  <FaArrowUp />
                  <Text color="#ccc">1,350 Sq Ft</Text>
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
          <h1 style={{ fontSize: "2rem" }}>
            Featured Properties on our Listing
          </h1>
          <Text color="#ccc" my="9px">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </Text>

          <Button border="1px solid #0ef" onClick={() => navigate("/signup")}>
            Discover More
          </Button>
        </GridItem>
        <GridItem>
          <Image src={discover} />
        </GridItem>
      </Grid>
      <Footer />
    </Stack>
  );
};

export default Landing;
