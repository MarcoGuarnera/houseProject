import { Title, Text, Button, Container } from "@mantine/core";
import { useRouter } from "next/router";

const Custom500 = () => {
  const router = useRouter();

  return (
    <Container>
      <Title>500 - Server-side error occurred</Title>
      <Text>
        Sorry, something went wrong on our end. Please try again later.
      </Text>
      <Button onClick={() => router.push("/")}>Go Back Home</Button>
    </Container>
  );
};

export default Custom500;
