import { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Alert,
  AlertIcon,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import fb from "../../assets/fb.png";
import google from "../../assets/g.png";
import { Link } from "react-router-dom";
import image from "../../assets/sign up .jpg";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      // Proceed with form submission or API call
      console.log("Form data:", { name, email, password });
    }
  };

  const bgImage = `url(${image})`;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      bgImage={bgImage}
      bgPosition="cover"
      bgSize="cover"
      height="100vh"
    >
      <Stack
        bg="#15014182"
        borderRadius="8px"
        // justifyContent="center"
        alignItems="center"
        w="30%"
        h="85vh"
      >
        <Heading> Sign Up</Heading>
        <VStack spacing={4} align="center" py="1rem">
          {error && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <FormControl id="name">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </FormControl>
          <FormControl id="email">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              // bg=""
            />
          </FormControl>
          <FormControl id="password">
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </FormControl>
          <FormControl id="confirmPassword">
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </FormControl>
          <Flex
            direction="row"
            gap="1rem"
            justifyContent="center"
            alignItems="center"
          >
            <input type="checkbox" name="check" id="check" />I read and Agree to
            <a href="#!" style={{ color: "#0ed" }}>
              Terms and Conditions
            </a>
          </Flex>
          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            borderRadius="2rem"
            w="40%"
          >
            Sign Up
          </Button>
        </VStack>
        <Text>Or</Text>
        <Stack direction="row" w="20%">
          <Link to="http://gmail.com" target="_blank">
            <Image src={google} />
          </Link>
          <Link to="https://facebook.com">
            <Image src={fb} />
          </Link>
        </Stack>
        <Flex direction="row" gap="8px">
          Already have an Account?
          <Link to="/login">
            <Text color="#0ed ">Login here</Text>
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SignUpForm;
