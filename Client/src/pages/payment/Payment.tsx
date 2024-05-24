import { useState } from "react";
import { Button, FormControl, FormLabel, Grid, Heading, Input, Select, Stack } from "@chakra-ui/react";
import axios from "axios";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    roomType: "",
    guest: "",
    arrivalDate: "", 
    arrivalTime: "", 
    cardNo: "",
    expiryDate: "",
    cvv: "",
  });

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const {
      fname,
      lname,
      email,
      roomType,
      guest,
      arrivalDate,
      arrivalTime,
      cardNo,
      expiryDate,
      cvv,
    } = formData;
    if (
      !fname ||
      !lname ||
      !email ||
      !roomType ||
      !guest ||
      !arrivalDate ||
      !arrivalTime ||
      !cardNo ||
      !expiryDate ||
      !cvv
    ) {
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
        toast.error("Error Occurred. Try Again...", toastOptions);
        console.log(err);
      }
    }
  };

  return (
    <div style={{ background: "#080124" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        bgPosition="cover"
        bgSize="cover"
        height="100vh"
        p="1rem"
      >
        <Heading m="1rem">Hotel Booking</Heading>
        <Stack
          bg="#15014182"
          borderRadius="8px"
          alignItems="center"
          border="1px solid #0ef"
          h="max-content"
          p="1rem"
          boxShadow="0 0 10px #0ef"
        >
          <Grid gridTemplateColumns="repeat(2,1fr)" gap="1rem">
            <FormControl id="fname">
              <Input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
              />
            </FormControl>
            <FormControl id="lname">
              <Input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </FormControl>
          </Grid>
          <FormControl id="email">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </FormControl>
          <FormControl id="roomType">
            <Select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              placeholder="Room Type"
            >
              <option value="">Select Room Type</option>
              <option value="smallroom">Small Room ($70)</option>
              <option value="bigroom">Big Room ($120)</option>
              <option value="kingroom">King Room ($200)</option>
            </Select>
          </FormControl>
          <FormControl id="guest">
            <Input
              type="number"
              name="guest"
              value={formData.guest}
              onChange={handleChange}
              placeholder="Number Of Guests"
            />
          </FormControl>
          <FormLabel>Arrival Date & Time</FormLabel>
          <Grid gridTemplateColumns="repeat(2,1fr)" gap="1rem">
            <FormControl id="arrivalDate">
              <Input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="arrivalTime">
              <Input
                type="time"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
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
              onChange={handleChange}
            />
            Save This Credit Card
          </FormControl>
          <Button colorScheme="blue" onClick={handleSubmit} borderRadius="2rem">
            Go To Confirmation
          </Button>
        </Stack>
      </Stack>
      <ToastContainer />
    </div>
  );
};

export default Payment;
