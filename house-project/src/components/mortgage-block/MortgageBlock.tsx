import {
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Input,
  InputBase,
  RingProgress,
  Text,
  Title,
} from "@mantine/core";
import { MortgageBlockProps } from "./types";
import { IconCurrencyEuro, IconPercentage } from "@tabler/icons-react";

export const MortgageBlock = ({ price }: MortgageBlockProps) => {
  return (
    <Container size="xl">
      <Title order={2}>Mortgage</Title>
      <Grid>
        <Grid.Col span={{ base: 6, md: 3, xs: 12 }}>
          <Input.Wrapper label="Property Price">
            <Input
              placeholder="Property Price"
              rightSection={<IconCurrencyEuro size={16} />}
              defaultValue={price}
            />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, xs: 12 }}>
          <Input.Wrapper label="Your Money">
            <Input
              placeholder="Your Money"
              rightSection={<IconCurrencyEuro size={16} />}
            />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, xs: 12 }}>
          <Input.Wrapper label="Interest rate">
            <Input
              placeholder="Interest rate"
              defaultValue={4.12}
              rightSection={<IconPercentage size={16} />}
            />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3, xs: 12 }}>
          <InputBase label="Number of years" component="select">
            <option value="30years">30 years</option>
            <option value="20years">20 years</option>
            <option value="10years">10 yeard</option>
            <option value="5years">5 yeard</option>
          </InputBase>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Group justify="center">
            <RingProgress
              sections={[{ value: 60, color: "blue" }]}
              label={
                <Text c="blue" fw={700} ta="center" size="md">
                  1.600 p/m
                </Text>
              }
            />
            <Group display="block">
              <Text fw={500}>Your money</Text>
              <Text fz="xs" c="dimmed">
                0 €
              </Text>
              <Text fw={500}>Mortgage</Text>
              <Text fz="xs" c="dimmed">
                {price}
              </Text>
            </Group>
            <Divider mx="xl" orientation="vertical" />
          </Group>
        </Grid.Col>
        <Grid.Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          span={{ base: 12, md: 6 }}
        >
          <Button fullWidth>Want to know more?</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
