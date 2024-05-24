import {
  Stack,
  Heading,
  Text,
  CardHeader,
  CardBody,
  Image,
  Grid,
  Flex,
} from "@chakra-ui/react";
import FeatureCard from "../featurecard/FeatureCard";
import {
  hotel10,
  hotel14,
  hotel15,
  hotel16,
  hotel22,
  hotel27,
  hotel28,
  hotel33,
  hotel36,
  hotel38,
  hotel4,
  hotel41,
  hotel5,
  hotel7,
  hotel9,
} from "../../assets/export";
import Nav from "../nav/Nav";
import { BsBell } from "react-icons/bs";
import Footer from "../footer/Footer";
import HotelServiceCard from "../hotelservice/HotelServiceCard";

export const About = () => (
  <Stack bg="#080124">
    <Nav heading="Places">
      <BsBell style={{ fontSize: "2rem" }} />
    </Nav>
    <Grid
      gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        p="4"
        spacing="4"
        bg="gray.100"
        align="center"
        justify="center"
        bgColor="#080124"
      >
        <Heading>About Us</Heading>
        <Text>
          Welcome to our hotel-finding app, where your comfort and convenience
          are our top priorities. Our mission is to simplify the process of
          finding and booking the perfect hotel for your stay, whether you're
          traveling for business or leisure.
        </Text>
        <Text>
          We gather data to provide you with personalized and efficient hotel
          booking services. This includes information such as your name, email,
          booking details, and usage patterns to ensure a seamless and tailored
          experience.
        </Text>
        <Text>
          Our team is dedicated to safeguarding your information. We have
          implemented robust physical, electronic, and managerial measures to
          protect your data from unauthorized access or disclosure.
        </Text>
        <Text>
          Should you have any questions or concerns about our practices, please
          reach out to us at support@hotelfindingapp.com. We are here to assist
          you and ensure your experience with our app is exceptional.
        </Text>
      </Stack>
      <Image src={hotel38} borderRadius="1rem" m="1rem" w="90%" />
    </Grid>
    <Footer />
  </Stack>
);

export const Services = () => (
  <Stack>
    <Nav heading="Places">
      <BsBell style={{ fontSize: "2rem" }} />
    </Nav>
    <Stack
      p="4"
      spacing="4"
      bg="gray.100"
      align="center"
      justify="center"
      bgColor="#080124"
    >
      <Heading>Our Services</Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="2rem"
      >
        <HotelServiceCard img={hotel22}>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Heading fontSize="1.6rem">Hotel Search</Heading>
            Welcome to the Hotel Booking App! Our platform is designed to help
            you find and book the best hotels effortlessly.
          </Flex>
        </HotelServiceCard>
        <HotelServiceCard img={hotel14}>
          <Heading fontSize="1.6rem">Reviesws and Ratings</Heading>
          Explore our wide range of hotel options, compare prices, read reviews,
          and make reservations all in one place. Whether you're looking for
          luxury accommodations or budget-friendly options, we have something
          for everyone.
        </HotelServiceCard>
        <HotelServiceCard img={hotel36}>
          <Heading fontSize="1.6rem">Maps and Directions</Heading>
          If you encounter any issues or have any questions, please visit our
          FAQ section first. If you need further assistance, feel free to reach
          out to us.
        </HotelServiceCard>
        <HotelServiceCard img={hotel22}>
          <Heading fontSize="1.6rem">Customer Support</Heading>
          You can contact our support team at support@hotelbookingapp.com or
          call us at (123) 456-7890. We are available from 9 AM to 6 PM, Monday
          to Friday, to assist you with your booking needs.
        </HotelServiceCard>
        <HotelServiceCard img={hotel15}>
          <Heading fontSize="1.6rem">Accomodation</Heading>
          Thank you for choosing our service. We are here to help you find the
          perfect stay!
        </HotelServiceCard>
        <HotelServiceCard img={hotel9}>
          <Heading fontSize="1.6rem">Booking Management</Heading>
          Thank you for choosing our service. We are here to help you find the
          perfect stay!
        </HotelServiceCard>
      </Grid>
    </Stack>
    <Footer />
  </Stack>
);

export const Hotels = () => (
  <>
    <Nav heading="Places">
      <BsBell style={{ fontSize: "2rem" }} />
    </Nav>
    <Stack
      p="4"
      spacing="4"
      bg="gray.100"
      align="center"
      justify="center"
      bgColor="#080124"
    >
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="4"
      >
        <FeatureCard img={hotel10}>
          <CardHeader>
            <Image src={hotel22} />
          </CardHeader>
          <CardBody>
            <Text>
              Welcome to our hotel finding app. By using our hotel booking
              services, you agree to comply with and be bound by the following
              terms and conditions.
            </Text>
          </CardBody>
        </FeatureCard>
        <FeatureCard img={hotel33}>
          <CardHeader>
            <Image src={hotel27} />
          </CardHeader>
          <CardBody>
            <Text>
              Welcome to our hotel finding app. By using our hotel booking
              services, you agree to comply with and be bound by the following
              terms and conditions.
            </Text>
          </CardBody>
        </FeatureCard>
        <FeatureCard img={hotel7}>
          <CardHeader>
            <Image src={hotel16} />
          </CardHeader>
          <CardBody>
            <Text>
              Use of our website and services is subject to the following terms:
              You may not use our site for any illegal or unauthorized purpose.
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </Text>
          </CardBody>
        </FeatureCard>
        <FeatureCard img={hotel4}>
          <CardHeader>
            <Image src={hotel10} />
          </CardHeader>
          <CardBody>
            <Text>
              All bookings are subject to availability and may be subject to
              further terms and conditions. Prices are subject to change without
              notice.
            </Text>
          </CardBody>
        </FeatureCard>
        <FeatureCard img={hotel41}>
          <CardHeader>
            <Image src={hotel28} />
          </CardHeader>
          <CardBody>
            <Text>
              We reserve the right to terminate your use of the Service or any
              related website for violating any of the prohibited uses.
            </Text>
          </CardBody>
        </FeatureCard>
        <FeatureCard img={hotel36}>
          <CardHeader>
            <Image src={hotel5} />
          </CardHeader>
          <CardBody>
            <Text>
              If you have any questions regarding our terms and conditions,
              please contact us at{" "}
              <a href="/policy">policy@hotelbookingapp.com.</a>
            </Text>
          </CardBody>
        </FeatureCard>
      </Grid>
    </Stack>
    <Footer />
  </>
);
