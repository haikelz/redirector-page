import { Button, Flex } from "@hope-ui/solid";
import DarkMode from "../darkMode";

const ListWeb = () => {
  return (
    <Flex
      justifyContent={"center"}
      marginTop={"$4"}
      alignItems={"center"}
      gap={"$4"}
      flexDirection={{ "@initial": "column", "@sm": "row" }}
    >
      <a href="https://www.dicoding.com/" target="_blank">
        <Button fontWeight={"$semibold"} colorScheme={"accent"}>
          Dicoding
        </Button>
      </a>
      <a href="https://skilvul.com/" target="_blank">
        <Button fontWeight={"$semibold"} colorScheme={"accent"}>
          Skilvul
        </Button>
      </a>
      <a href="https://www.youtube.com/watch?v=D_4IyRtsrVk" target="_blank">
        <Button fontWeight={"$semibold"} colorScheme={"accent"}>
          Surat Al-Kahfi
        </Button>
      </a>
      <a href="https://buildwithangga.com/" target="_blank">
        <Button fontWeight={"$semibold"} colorScheme={"accent"}>
          BWA
        </Button>
      </a>
      <DarkMode />
    </Flex>
  );
};

export default ListWeb;
