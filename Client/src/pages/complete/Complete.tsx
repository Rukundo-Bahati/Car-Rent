import { Button, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Complete = () => {
  const [currentUser, setCurrentUser] = useState("")
  const navigate = useNavigate()
  
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
  return (
    <div>
      <Stack justifyContent="center" alignItems="center" h="100vh" bg="#080124">
        <Heading>Booking Confirmed</Heading>
        <Link to="/home">
          <Button
            colorScheme="blue"
            borderRadius="2rem"
            // w="40%"
          >
            Back Me To Home
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Complete;
