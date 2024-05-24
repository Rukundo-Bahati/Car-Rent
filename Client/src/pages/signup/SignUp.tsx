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
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import google from "../../assets/g.png";
import fb from "../../assets/fb.png";
import axios from "axios";
import image from "../../assets/sign up .jpg";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import { BsBell } from "react-icons/bs";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const validateForm = () => {
    const { name, email, password, ConfirmPassword } = formData;
    if (!name || !email || !password || !ConfirmPassword) {
      toast.error("All fields are required.", toastOptions);
      return false;
    }
    if (password !== ConfirmPassword) {
      toast.error("Passwords do not match.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const signupRoute = "http://localhost:7500/api/users";
        console.log("Form Data:", formData); // Log the form data before sending
        const { data: res } = await axios.post(signupRoute, formData);
        toast.success("Operation successful..");
        localStorage.setItem("token", res.token); // Adjust according to your server response
        navigate("/login");
      } catch (err) {
        console.error(err); // Log the error
        toast.error("Error in Sign up. Try Again", toastOptions);
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
        // justifyContent="center"
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
          // p="2rem"
        >
          <Heading>Sign Up</Heading>
          <VStack
            spacing={4}
            align="center"
            justifyContent="center"
            alignItems="center"
            w={{ base: "90%", md: "90%" }}
            // mb="1rem"
          >
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
            <FormControl id="ConfirmPassword">
              <Input
                type="password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </FormControl>
            <Button
              colorScheme="blue"
              onClick={handleSubmit}
              borderRadius="2rem"
              w="47%"
            >
              Sign Up
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
          <Flex direction="row" gap="8px" mb="1.5rem">
            Already have an Account?
            <Link to="/login">
              <Text color="#0ed ">Sign In</Text>
            </Link>
          </Flex>
        </Stack>
        <ToastContainer />
      </Stack>
      <Footer />
    </div>
  );
};

export default SignUp;
