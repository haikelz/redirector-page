import { Button, Flex } from "@hope-ui/solid";
import { ListData } from "./listData";
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
      {ListData.map((data) => (
        <a href={data.link} target="_blank">
          <Button fontWeight={"$semibold"} colorScheme={"accent"}>
            {data.ket}
          </Button>
        </a>  
      ))} 
      <DarkMode />
    </Flex>
  );
};

export default ListWeb;
