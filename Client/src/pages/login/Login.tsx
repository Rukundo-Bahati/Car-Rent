import { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Stack,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import fb from "../../assets/fb.png";
import google from "../../assets/g.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import image from "../../assets/sign up .jpg";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import { BsBell } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     try {
  //       const loginRoute = "http://localhost:7500/api/auth";
  //       const { formData: res } = await axios.post(loginRoute, formData);
  //       localStorage.setItem("token", res.formData);
  //       navigate("/home");
  //     } catch(err) {
  //       toast.error("Error During Log in", toastOptions)
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const signinRoute = "http://localhost:7500/api/auth";
        const response = await axios.post(signinRoute, formData); // Use await to handle the async request
        localStorage.setItem("token", response.data.token); // Assume the response has a `token` field
        navigate("/home");
      } catch (err) {
        toast.error("Error during Signing in. Try Again", toastOptions);
      }
    }
  };

  const bgImage = `url(${image})`;

  return (
    <div
      style={{
        background: `${bgImage}`,
        backgroundPosition: "cover",
        backgroundSize: "cover",
      }}
    >
      <Nav heading="Places">
        <BsBell style={{ fontSize: "2rem" }} />
      </Nav>
      <Stack
        alignItems="center"
        bgPosition="cover"
        bgSize="cover"
        spacing="2rem"
      >
        <Stack
          boxShadow="0 0 13px dodgerblue"
          bg="#15014682"
          borderRadius="8px"
          alignItems="center"
          w={{ base: "90%", md: "30%" }}
          h="max-content"
        >
          <Heading>Sign In</Heading>
          <VStack
            spacing={5}
            py="3rem"
            align="center"
            justifyContent="center"
            alignItems="center"
            w={{ base: "90%", md: "90%" }}
          >
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
          <Flex direction="row" gap="8px" mb="1rem">
            Don't have an Account?
            <Link to="/signup">
              <Text color="#0ed ">Sign-Up</Text>
            </Link>
          </Flex>
        </Stack>
        <ToastContainer />
      </Stack>
      <Footer />
    </div>
  );
};

export default Login;
