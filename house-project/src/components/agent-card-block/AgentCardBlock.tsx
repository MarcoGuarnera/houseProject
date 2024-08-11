import {
  Card,
  Text,
  Button,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import { useState } from "react";
import styles from "./styles.module.css";
import { IconCalendar, IconPhone } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";

interface AgentCardBlockProps {
  realtor: {
    name: string;
    id: number;
    phone: string;
  };
}

export const AgentCardBlock = ({ realtor }: AgentCardBlockProps) => {
  const [formVisible, setFormVisible] = useState(false);
  const [dateValue, setDateValue] = useState<Date | null>(null);

  if (!realtor) return;

  return (
    <Card shadow="sm" padding="lg" withBorder className={styles.card}>
      <Title order={2}>{realtor?.name}</Title>
      <Button
        className={styles.button}
        my="md"
        variant="transparent"
        fullWidth
        leftSection={<IconPhone />}
      >
        {realtor?.phone}
      </Button>

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
            Send Email
          </Button>
        </>
      ) : (
        <Button fullWidth mt="md" onClick={() => setFormVisible(true)}>
          Contact Agent
        </Button>
      )}
      <DatePickerInput
        mt="md"
        dropdownType="modal"
        clearable
        leftSection={
          <IconCalendar
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
        leftSectionPointerEvents="none"
        placeholder="Schedule a visit"
        value={dateValue}
        onChange={setDateValue}
      />
    </Card>
  );
};
