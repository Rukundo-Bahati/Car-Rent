import{ useState } from "react";
import Nav from "../../components/nav/Nav";
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import image from "../../assets/sign up .jpg";
import { Link } from "react-router-dom";

const Reserve = () => {
  const bgImage = `url(${image})`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    confirmPassword: "",
    country: "",
    code: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, tel, country, code } = formData;
    if (email == "") {
      setError("Please, Input All data");
    } else {
      setError("");
      // Proceed with form submission or API call
      console.log("Form data:", { name, email, code, tel, country });
    }
  };
  return (
    <div>
      <Nav heading={<BsArrowLeft style={{ fontSize: "2rem" }} />}>
        <Text fontSize="2rem" color="#fff">
          <Link to="/home">
            <BsHouse />
          </Link>
        </Text>
      </Nav>
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
          w="36%"
          h="85vh"
        >
          <Heading> Reservation</Heading>
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
                placeholder="FirstName"
              />
            </FormControl>
            <FormControl id="name">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="LastName"
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

            <FormControl id="country">
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
              />
            </FormControl>

            <FormControl id="code">
              <Input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Postal code"
              />
            </FormControl>
            <FormControl id="tel">
              <Input
                type="number"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </FormControl>

            <Link to="/payment">
              <Button
                colorScheme="blue"
                onClick={handleSubmit}
                borderRadius="2rem"
                // w="40%"
              >
                Go To Payment
              </Button>
            </Link>
          </VStack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Reserve;
