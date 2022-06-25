import { Text } from "@hope-ui/solid";

const Time = () => {
  let date = new Date();
  return (
    <>
      <Text fontWeight={"$bold"}>
        {date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </Text>
    </>
  );
};

export default Time;
