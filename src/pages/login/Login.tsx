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
  FormLabel,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import fb from "../../assets/fb.png";
import google from "../../assets/g.png";
import { Link } from "react-router-dom";
import image from "../../assets/sign up .jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (password === "") {
      setError("Passwords must not be empty.");
    } else {
      setError("");
      // Proceed with form submission or API call
      console.log("Form data:", { name, email, password });
      window.location.href = '/home';
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
        w={{ base: "90%", md: "30%" }}
        h="86vh"
      >
        <Heading>Sign In</Heading>
        <VStack
          spacing={5}
          py="3rem"
          align="center"
          justifyContent="center"
          alignItems="center"
          w={{ base: "90%", md: "80%" }}
        >
          {error && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}

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

          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            borderRadius="2rem"
            w="47%"
          >
            Sign In
          </Button>
        </VStack>
        <Link to="/rememberMe">
          <Text color="#0ed">Forgot Password?</Text>
        </Link>
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
          Don't have an Account?
          <Link to="/signup">
            <Text color="#0ed ">Sign-Up</Text>
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Login;
