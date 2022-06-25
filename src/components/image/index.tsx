import { Flex, Image } from "@hope-ui/solid";

const ImageProfile = () => {
  return (
    <Flex justifyContent={"center"}>
      <Image
        src="/img/random.jpeg"
        alt="waifu"
        width="250px"
        height="250px"
        borderRadius={"$full"}
      />
    </Flex>
  );
};

export default ImageProfile;
