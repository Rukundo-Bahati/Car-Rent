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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    expiryDate: "",
    cardNo: "",
    cvv: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { name, expiryDate, cardNo, cvv } = formData;
    if (!name || !expiryDate || !cardNo || !cvv) {
      toast.error("Please, Enter All Data", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const paymentUrl = "http://localhost:7500/api/payment";
        const response = await axios.post(paymentUrl, formData);
        console.log(response.data);
        navigate("/confirm");
      } catch (err) {
        toast.error("Error Occured. Try Again...", toastOptions);
        console.log(err);
      }
    }
  };
  return (
    <div style={{ background: "#080124" }}>
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
        bgPosition="cover"
        bgSize="cover"
        height="70vh"
        p="1rem"
        // w="40%"
      >
        <Stack
          bg="#15014182"
          borderRadius="8px"
          // justifyContent="center"
          alignItems="center"
          border="1px solid #0ef"
          // w="36%"
          h="max-content"
          p="1rem"
          boxShadow="0 0 10px #0ef"
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
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
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
              placeholder="Your Last Name"
            />
          </FormControl>
          <FormControl>
            <input
              type="checkbox"
              name="save"
              id="save"
              // value={formData.save}
              onChange={handleChange}
            />
            Save This Credit Card
          </FormControl>
          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            borderRadius="2rem"
            // w="40%"
          >
            Go To Confirmation
          </Button>
        </Stack>
      </Stack>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Payment;
