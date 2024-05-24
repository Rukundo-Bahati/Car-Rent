import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  Login,
  Signup,
  Home,
  Hotel,
  Reserve,
  Payment,
  Confirm,
  Complete,
  NotFound,
} from "./pages"; // Import your NotFound component
import { Stack, Box } from "@chakra-ui/react";
import { Privacy, Help, Policy } from "./components/privancy/Privancy";

const App = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      fontFamily="roboto, sans-serif"
    >
      <Router>
        <Stack flexGrow={1}>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/description" element={<Hotel />} />
            <Route path="/reservation" element={<Reserve />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/help" element={<Help />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Stack>
      </Router>
    </Box>
  );
};

export default App;
