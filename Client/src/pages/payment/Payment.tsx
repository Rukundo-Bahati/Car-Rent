import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import image from "../../assets/hotel10.jpg";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [currentUser, setCurrentUser] = useState(""); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lno: "",
    duration: "",
    carType: "",
    passengerCount: "",
    pickupDate: "",
    pickupTime: "",
    email: "",
    specialRequest: "",
    cardNo: "",
    expiryDate: "",
    cvv: "",
  });

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        navigate("/login");
      } else {
        try {
          // Validate and parse the token here if needed
          setCurrentUser(storedToken);
        } catch (error) {
          console.error("Error validating token:", error);
          navigate("/login");
        }
      }
    };

    checkToken();
  }, [navigate]);

  if (currentUser === null) {
    // Return loading state or null here if needed
    return null;
  }

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const {
      lno,
      duration,
      carType,
      passengerCount,
      pickupDate,
      pickupTime,
      email,
      cardNo,
      expiryDate,
      cvv,
    } = formData;
    if (
      !lno ||
      !duration ||
      !carType ||
      !passengerCount ||
      !pickupDate ||
      !pickupTime ||
      !email ||
      !cardNo ||
      !expiryDate ||
      !cvv
    ) {
      toast.error("Please, Enter All Data", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const paymentUrl = "http://localhost:5230/api/payment";
        const response = await axios.post(paymentUrl, formData);
        console.log(response.data);
        navigate("/confirm");
      } catch (err) {
        toast.error("Error Occurred. Try Again...", toastOptions);
        console.log(err);
      }
    }
  };

  return (
    <Stack
      bgImage={`url(${image})`}
      bgPosition="cover"
      bgSize="cover"
      h="100vh"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        bgPosition="cover"
        bgSize="cover"
        height="100vh"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        p="1rem"
      >
        <Heading m="1rem">Car Renting</Heading>
        <Stack
          bg="#080124"
          borderRadius="8px"
          alignItems="center"
          border="1px solid #0ef"
          h="max-content"
          p="1rem"
          boxShadow="0 0 10px #0ef"
        >
          <Grid gridTemplateColumns="repeat(2,1fr)" gap="1rem">
            <FormControl id="lno">
              <Input
                type="text"
                name="lno"
                value={formData.lno}
                onChange={handleChange}
                placeholder="Driver's License Number"
              />
            </FormControl>
            <FormControl id="duration">
              <Input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Rental Duration"
              />
            </FormControl>
          </Grid>

          <FormControl id="carType">
            <Select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              placeholder="Car Type"
            >
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="convertible">Convertible</option>
              <option value="luxury">Luxury</option>
            </Select>
          </FormControl>
          <FormControl id="passengerCount">
            <Input
              type="number"
              name="passengerCount"
              value={formData.passengerCount}
              onChange={handleChange}
              placeholder="Number Of Passengers"
            />
          </FormControl>
          <FormControl id="email">
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </FormControl>
          <FormLabel>Pick-up Date & Time</FormLabel>
          <Grid gridTemplateColumns="repeat(2,1fr)" gap="1rem">
            <FormControl id="pickupDate">
              <Input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="pickupTime">
              <Input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>

          <FormControl id="specialRequest">
            <Textarea
              name="specialRequest"
              resize="none"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Special Request"
            />
          </FormControl>
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
            <FormControl id="expiryDate">
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

          <FormControl>
            <input
              type="checkbox"
              name="save"
              id="save"
            />
            I Agree to the Terms & Conditions
          </FormControl>
          <Button colorScheme="blue" onClick={handleSubmit} borderRadius="2rem">
            Go To Confirmation
          </Button>
        </Stack>
      </Stack>
      <ToastContainer />
    </Stack>
  );
};

export default Payment;
