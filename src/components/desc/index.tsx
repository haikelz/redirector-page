import { Box, Text } from "@hope-ui/solid";

const Desc = ({ isOpen }: any) => {
  return (
    <Box textAlign={"center"}>
      {!isOpen() ? (
        ""
      ) : (
        <>
          <Text fontSize={"$xl"}>
            "Demi masa, sesungguhnya manusia itu benar-benar dalam kerugian"
          </Text>
          <Text fontSize={"$lg"} fontWeight={"$medium"}>
            Al-'Asr ayat 1-2
          </Text>
        </>
      )}
    </Box>
  );
};

export default Desc;
