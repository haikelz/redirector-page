import {
  Button,
  Flex,
  Image,
  useColorMode,
} from "@hope-ui/solid";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"flex-end"} alignItems={"center"}>
      <Button onclick={toggleColorMode} colorScheme={"accent"}>
        {colorMode() === "light" ? (
          <Image src="/img/moon.svg" />
        ) : (
          <Image src="/img/sun.svg" />
        )}
      </Button>
    </Flex>
  );
};

export default DarkMode;
