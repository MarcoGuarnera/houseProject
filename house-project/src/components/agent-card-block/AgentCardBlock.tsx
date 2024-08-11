import { Card, Text, Button, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import styles from "./styles.module.css";

export function AgentCardBlock() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Text w={500}>Contact the Agent</Text>
      {formVisible ? (
        <>
          <Textarea placeholder="Message" label="Message" required />
          <TextInput placeholder="Name" label="Name" required />
          <TextInput placeholder="Email" label="Email" type="email" required />
          <TextInput
            placeholder="Telephone"
            label="Telephone"
            type="tel"
            required
          />
          <Button fullWidth mt="md">
            Submit
          </Button>
        </>
      ) : (
        <Button fullWidth mt="md" onClick={() => setFormVisible(true)}>
          Contact Agent
        </Button>
      )}
      <Button fullWidth mt="md" variant="outline">
        Schedule a Visit
      </Button>
    </Card>
  );
}
