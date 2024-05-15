import { Grid, Heading, Text, Image, Img } from "@chakra-ui/react";
import Nav from "../../components/nav/Nav";
import Search from "../../components/nav/Search";
import { BsBell} from "react-icons/bs";
import CardItem from "../../components/card/CardItem";
import hotel1 from "../../assets/hotel1.jpg";
import hotel2 from "../../assets/hotel2.jpg";
import hotel3 from "../../assets/hotel3.jpg";
import hotel4 from "../../assets/hotel4.jpg";

interface Props {
  onSearch: (searchText: string) => void;
}

const Home = ({ onSearch }: Props) => {
  return (
    <div>
      <Nav heading="Places">
        <BsBell style={{ fontSize: "2rem" }} />
      </Nav>
      <Search onSearch={onSearch} />
      <Grid
        p="3.5rem"
        gap="2rem"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      >
        <CardItem img={hotel1}>
          <Heading color="#ddd">Mumbai</Heading>
          <Text color="#ddd">Financial Capital of India</Text>
         
          
        </CardItem>
        <CardItem img={hotel2}>
          <Heading>Chenai</Heading>
          <Text color="#ddd">Home Of Temples</Text>
        </CardItem>
        <CardItem img={hotel3}>
          <Heading>Nairobi</Heading>
          <Text color="#ddd">Capital Of Kenya</Text>
        </CardItem>
        <CardItem img={hotel4}>
          <Heading>Kigali</Heading>
          <Text color="#ddd">In the country of Thousand Hills</Text>
         
        </CardItem>
      </Grid>
     
    </div>
  );
};

export default Home;
