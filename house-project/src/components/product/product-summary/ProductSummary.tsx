import { AppContext } from "@/providers/AppContextProvider";
import {
  Card,
  Group,
  Text,
  Button,
  Divider,
  Title,
  ThemeIcon,
} from "@mantine/core";
import {
  IconRuler,
  IconBed,
  IconMapPinFilled,
  IconCalculator,
  IconBath,
  IconDimensions,
} from "@tabler/icons-react";
import { useContext } from "react";
import styles from "./styles.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { handleScrollToSection } from "@/utiles/handleScrollToSection";

export const ProductSummary = () => {
  const { houseData } = useContext(AppContext);
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!houseData) return;

  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat("nl-NL").format(price);
  };

  const calculatePrice = (): string => {
    if (houseData?.saleStatus === "Beschikbaar" && houseData.price.Koopprijs) {
      return `${formattedPrice(houseData.price.Koopprijs)} ${
        houseData.price.KoopAbbreviation
      } `;
    } else if (houseData?.price.Huurprijs) {
      return `${formattedPrice(houseData.price.Huurprijs)} `;
    }
    return "";
  };

  return (
    <Card shadow="sm" padding="lg">
      {/* Address and Price */}
      <Group justify="space-between">
        <Group>
          <ThemeIcon
            size="xl"
            radius="sm"
            color="yellow"
            onClick={() => handleScrollToSection("map")}
            className={styles.pointer}
          >
            <IconMapPinFilled />
          </ThemeIcon>
          <Group display="block">
            <Title order={1}>{houseData.address}</Title>
            <Text size="sm" c="dimmed" mt="xs">
              {houseData.postcode} {houseData.city}
            </Text>
          </Group>
        </Group>
        <Title order={1}>{calculatePrice()}</Title>
      </Group>

      <Divider my="xs" />

      {/* Basic info and button */}
      <Group justify="end" my="xs"></Group>
      <Group justify="space-between">
        <Group gap="xl">
          {!!houseData.livingArea && (
            <Group>
              <IconRuler />
              <Text>
                {houseData?.livingArea} {!isMobile && `m² wonen`}
              </Text>
            </Group>
          )}
          {!!houseData.bedrooms ||
            (!!houseData.rooms && (
              <Group>
                <IconBed />
                <Text>
                  {houseData?.bedrooms ?? houseData.rooms}{" "}
                  {!isMobile && `slaapkamers`}
                </Text>
              </Group>
            ))}

          {!!houseData.bathrooms && (
            <Group>
              <IconBath />
              <Text>
                {houseData?.bathrooms} {!isMobile && `bathrooms`}{" "}
              </Text>
            </Group>
          )}

          {!!houseData.landArea && (
            <Group>
              <IconDimensions />
              <Text>
                {houseData?.landArea} {!isMobile && `m² perceel`}
              </Text>
            </Group>
          )}
        </Group>
        <Button
          size="sm"
          variant="subtle"
          leftSection={
            <IconCalculator style={{ width: "1rem", height: "1rem" }} />
          }
          onClick={() => handleScrollToSection("mortgage")}
        >
          Calculate Mortgage
        </Button>
      </Group>
    </Card>
  );
};
