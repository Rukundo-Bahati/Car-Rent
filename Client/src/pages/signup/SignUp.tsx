import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import styles from "./styles.module.css";
import { Heading } from "@chakra-ui/react";

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
        const { data: res } = await axios.post(signupRoute, formData);

        // Check if the user was successfully created
        if (res.token) {
          toast.success("Operation successful..");
          // Set token in cookies
          localStorage.setItem("token", res.token);
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
            <h1>Welcome Back</h1>
            <button
              type="button"
              className={styles.white_btn}
              onClick={() => navigate("/login")}
            >
              Sing in
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
                type="email"
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
                Sing Up
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
