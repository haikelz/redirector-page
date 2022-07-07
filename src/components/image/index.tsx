import { Flex, Image } from "@hope-ui/solid";

const ImageProfile = () => {
  return (
    <Flex justifyContent={"center"}>
      <Image
        src="/img/Nord-Green.jpeg"
        alt="gambar"
        width="250px"
        objectFit={"cover"}
        height="250px"
        borderRadius={"$full"}
        objectPosition={"top"}
      />
    </Flex>
  );
};

export default ImageProfile;
