import { useEffect, useState } from "react";
import { Grid, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Nav from "../../components/nav/Nav";
import Search from "../../components/nav/Search";
import { BsBell } from "react-icons/bs";
import CardItem from "../../components/card/CardItem";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import allImages from "../../assets/Display";
import Cookies from 'js-cookie';
import "./home.css";

const Home = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null); // Set initial state to null
  const [visibleImages, setVisibleImages] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        navigate('/login');
      } else {
        try {
          // Validate and parse the token here if needed
          setCurrentUser(storedToken);
        } catch (error) {
          console.error('Error validating token:', error);
          navigate('/login');
        }
      }
    };

    checkToken();
  }, [navigate]);

  if (currentUser === null) {
    // Return loading state or null here if needed
    return null;
  }

  const filteredImages = allImages.filter(
    (image) =>
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredImages.length === 0) {
    toast.error("Search Not Found!. Refresh The Page", toastOptions);
  }

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
  };

  return (
    <div style={{ background: "#080124" }}>
      <Nav heading="Places">
        <BsBell style={{ fontSize: "2rem" }} />
      </Nav>
      <Search onSearch={setSearchQuery} />
      <Grid
        p="3.5rem"
        gap="2rem"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3, 1fr)",
        }}
        className="grid"
      >
        {filteredImages.slice(0, visibleImages).map((image, index) => (
          <CardItem img={image.img} key={index}>
            <Heading color="#ddd">{image.title}</Heading>
            <Text color="#ddd">{image.description}</Text>
            <Link to="/description" className="link">
              <Button zIndex="100" bg="#080124">
                More
              </Button>
            </Link>
          </CardItem>
        ))}
      </Grid>
      {visibleImages < filteredImages.length && (
        <Flex alignItems="center" justifyContent="center" mb="1rem">
          <Button onClick={loadMoreImages} border="1px solid #0ef">
            Load More
          </Button>
        </Flex>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
