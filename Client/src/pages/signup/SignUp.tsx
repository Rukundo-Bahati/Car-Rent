import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import axios from "axios";
import styles from "./styles.module.css";
import { Heading, Text } from "@chakra-ui/react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e: any) => {
    const input = e.target;
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
        const signupRoute = "http://localhost:5230/api/users";
        // Exclude ConfirmPassword from the data being sent to the backend
        const { ConfirmPassword, ...dataToSend } = formData;

        const { data } = await axios.post(signupRoute, dataToSend);
        console.log(data); // Check the response object

        // Check if the user was successfully created
        if (data.token) {
          toast.success("Operation successful..");
          // Set token in local storage
          localStorage.setItem("token", data.token);
          navigate("/login");
        } else {
          throw new Error("User registration failed");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error in Sign up. Try Again", toastOptions);
      }
    }
  };

  return (
    <div
      style={{
        background: "#080124",
      }}
    >
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <Text fontSize={{ base: "1.3rem", md: "1.6rem" }}>Welcome!</Text>
            <button
              type="button"
              className={styles.white_btn}
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <Heading color="#1c024e" fontFamily="poppins">
                Create Account
              </Heading>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                onChange={handleChange}
                value={formData.ConfirmPassword}
                className={styles.input}
              />

              <button type="submit" className={styles.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
