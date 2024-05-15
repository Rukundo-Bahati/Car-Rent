import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import hotel2 from "../../assets/m.jpg";
import hotel from "../../assets/m.jpg";
import Desc from "../../components/description/Desc";

const Hotel = () => {
  return (
    <div>
      <Desc img={hotel2}>
        <Flex justifyContent="space-between" alignItems="center" m="1rem">
          <div>
            <Heading fontSize="19px">Chenai</Heading>
            <Text color="#ddd" fontSize="17px">
              Hotel Taj
            </Text>
          </div>
          <div>
            <Img src={hotel} alt="" w="100%" maxW="150px" borderRadius="10px" />
          </div>
        </Flex>
      </Desc>
    </div>
  );
};

export default Hotel;
