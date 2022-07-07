import { Flex, Heading, Image } from "@hope-ui/solid";
import { createSignal } from "solid-js";
import Time from "../../components/time";
import ListWeb from "../../components/listWeb";
import ImageProfile from "../../components/image";
import Desc from "../../components/desc";

const Home = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const handleClick = () => setIsOpen(!isOpen());

  return (
    <Flex
      justifyContent={"center"}
      height={"100vh"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <ImageProfile />
      <Flex justifyContent={"center"}>
        <Heading fontSize={"$3xl"} fontWeight={"bold"}>
          Yuk Produktif!
        </Heading>
        <Image
          src={"/img/chevron-down.svg"}
          width={"35px"}
          cursor={"pointer"}
          onClick={handleClick}
        />
      </Flex>
      <Desc isOpen={isOpen} />
      <Time />
      <ListWeb />
    </Flex>
  );
};

export default Home;
