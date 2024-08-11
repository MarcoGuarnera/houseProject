import { Text, Button } from "@mantine/core";
import { useState } from "react";
// import { useHouseContext } from "../pages/index";

export const ProductFeatures = () => {
  // const { houseData } = useContext(HouseContext);
  const [expanded, setExpanded] = useState(false);

  // if (!houseData) return null;

  // const description = expanded
  //   ? houseData.description
  //   : houseData.description.substring(0, 255);

  return (
    <>
      {/* <Text>{description}</Text> */}
      <Button onClick={() => setExpanded(!expanded)} mt="sm">
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};
