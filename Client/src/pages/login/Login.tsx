import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast , ToastOptions} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./styles.module.css";
import { Heading } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const signinRoute = "http://localhost:7500/api/auth";
        const { data: res } = await axios.post(signinRoute, formData);

        // Check if token exists
        const token = localStorage.getItem("token");
        console.log(res.data)
        if (token) {
          navigate("/home");
        } else {
          toast.error("User Not Found!", toastOptions);
        }
      } catch (err) {
        toast.error("Account Is Not Found! Try to Sign Up", toastOptions);
      }
    }
  };

  return (
    <div>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
            <Heading color="#1c024e" fontFamily="poppins">
                Log into your Account
              </Heading>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
                className={styles.input}
              />

              <button type="submit" className={styles.green_btn}>
                Sign In
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <button
              type="button"
              className={styles.white_btn}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
