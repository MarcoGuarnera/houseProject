import { Button, Container, Grid, Group, Text, Title } from "@mantine/core";
import styles from "./styles.module.css";
import {
  IconBath,
  IconBed,
  IconBolt,
  IconBuildings,
  IconFlame,
  IconHomeExclamation,
  IconParkingCircle,
  IconRuler,
  IconUsersGroup,
  IconWall,
} from "@tabler/icons-react";
import { useContext } from "react";
import { AppContext } from "@/providers/AppContextProvider";

export const ProductFeatures = () => {
  const { houseData } = useContext(AppContext);
  if (!houseData) return;

  //TODO: map an array with the icons, houseData field and label to refactor the code
  return (
    <Container className={styles.container} size="xl">
      <Title order={2}>Kenmerken</Title>
      <Grid justify="space-between">
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Group mt="lg">
            <IconBuildings />
            <div>
              <Text fw={500}>Typology</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.objectType ?? "N/A"}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconRuler />
            <div>
              <Text fw={500}>Wonen</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.livingArea ?? "N/A"} m²
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconBed />
            <div>
              <Text fw={500}>Slaapkamers</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.bedrooms ?? houseData.rooms}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconBath />
            <div>
              <Text fw={500}>Bathrooms</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.bathrooms ?? "N/A"}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconFlame />
            <div>
              <Text fw={500}>Heating</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.heating ?? "N/A"}
              </Text>
            </div>
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Group mt="lg">
            <IconHomeExclamation />
            <div>
              <Text fw={500}>Construction Year</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.constructionYear ?? "N/A"}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconUsersGroup />
            <div>
              <Text fw={500}>VVE</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.vveContribution ?? "N/A"}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconWall />
            <div>
              <Text fw={500}>Insulation</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.insulation ?? "N/A"}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconParkingCircle />
            <div>
              <Text fw={500}>Parking</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.parkingType ?? "N/A"}
              </Text>
            </div>
          </Group>
          <Group mt="lg">
            <IconBolt />
            <div>
              <Text fw={500}>Energy Label</Text>
              <Text fz="xs" c="dimmed">
                {houseData?.energyLabel.Label ?? "N/A"}
              </Text>
            </div>
          </Group>
        </Grid.Col>
      </Grid>
      <Button variant="subtle" fullWidth className={styles.button}>
        Show ore
      </Button>
    </Container>
  );
};
