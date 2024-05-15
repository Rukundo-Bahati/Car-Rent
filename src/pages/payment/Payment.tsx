import Nav from "../../components/nav/Nav";
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import {
  Button,
  FormControl,
  Grid,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg from "../../assets/hotel4.jpg";
import { useState } from "react";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    exp: "",
    cardNo: "",
    cvv: "",
    save: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, exp, cardNo, cvv, save } = formData;
    if (exp == "") {
      setError("Please, Input All data");
    } else {
      setError("");
      // Proceed with form submission or API call
      console.log("Form data:", { name, exp, cardNo, cvv, save });
    }
  };
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundPosition: "cover",
        backgroundSize: "cover",
        opacity: 0.8,
      }}
    >
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
        // bgImage={bgImage}
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
          h="max-content"
          p="1rem"
        >
          <FormControl id="cardNo">
            <Input
              type="number"
              name="cardNo"
              value={formData.cardNo}
              onChange={handleChange}
              placeholder="Card Number"
            />
          </FormControl>
          <Grid gridTemplateColumns="repeat(2,1fr)" gap="1rem">
            <FormControl id="exp">
              <Input
                type="number"
                name="exp"
                value={formData.exp}
                onChange={handleChange}
                placeholder="Expiry"
              />
            </FormControl>
            <FormControl id="cvv">
              <Input
                type="number"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="CVV"
              />
            </FormControl>
          </Grid>
          <FormControl id="name">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </FormControl>
          <FormControl>
            <input
              type="checkbox"
              name="save"
              id="save"
              value={formData.save}
              onChange={handleChange}
            />
            Save This Credit Card
          </FormControl>
        </Stack>

        <Link to="/confirm">
          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            borderRadius="2rem"
            // w="40%"
          >
            Go To Confirmation
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Payment;
