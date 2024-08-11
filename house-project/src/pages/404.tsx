// pages/404.tsx
import { Center, Text, Button } from "@mantine/core";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  return (
    <Center style={{ height: "100vh", flexDirection: "column" }}>
      <Text size="xl" w={700}>
        404 - Page Not Found
      </Text>
      <Button onClick={() => router.push("/")}>Go Back Home</Button>
    </Center>
  );
};

export default Custom404;
