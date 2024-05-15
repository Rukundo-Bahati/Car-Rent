import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Login, Signup, Home, Hotel } from "./pages";
import { Stack, Box } from "@chakra-ui/react"; // Added Box from Chakra UI
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Router>
        <Stack m="2rem" flexGrow={1}>
          {" "}
          {/* Added flexGrow to allow content to fill remaining space */}
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/description" element={<Hotel />} />
          </Routes>
        </Stack>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;
