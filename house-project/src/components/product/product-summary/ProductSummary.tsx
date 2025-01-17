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
  IconPhone,
} from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { handleScrollToSection } from "@/utiles/handleScrollToSection";

export const ProductSummary = () => {
  const { houseData } = useContext(AppContext);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSticky, setIsSticky] = useState(false);

  // handle the sticky top bar calculation based if the summary his still visibile or not
  useEffect(() => {
    const handleScroll = () => {
      const summaryElement = document.getElementById("product-summary");
      if (summaryElement) {
        const rect = summaryElement.getBoundingClientRect();
        const isPast = rect.bottom < 0;
        setIsSticky(isPast);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      return `${formattedPrice(houseData.price.Huurprijs)} p/m `;
    }
    return "";
  };

  return (
    <>
      <Card shadow="sm" padding="lg" id="product-summary">
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
                  {houseData?.livingArea ?? "N/A"} {!isMobile && `m² wonen`}
                </Text>
              </Group>
            )}
            {!!houseData.bedrooms ||
              (!!houseData.rooms && (
                <Group>
                  <IconBed />
                  <Text>
                    {houseData?.bedrooms ?? houseData.rooms}
                    {!isMobile && ` slaapkamers`}
                  </Text>
                </Group>
              ))}

            {!!houseData.bathrooms && (
              <Group>
                <IconBath />
                <Text>
                  {houseData?.bathrooms ?? "N/A"} {!isMobile && `bathrooms`}
                </Text>
              </Group>
            )}

            {!!houseData.landArea && (
              <Group>
                <IconDimensions />
                <Text>
                  {houseData?.landArea ?? "N/A"} {!isMobile && `m² perceel`}
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
      {isSticky && (
        <div className={isMobile ? styles.bottomNavBar : styles.stickyBar}>
          {!isMobile && (
            <div>
              <Title order={3}>{houseData.address}</Title>
              <Text fw={500}>€ {calculatePrice()}</Text>
            </div>
          )}
          <Group
            gap={0}
            className={styles.links}
            justify="flex-end"
            wrap="nowrap"
          >
            <Button
              className={styles.buttonPhone}
              my="md"
              variant="transparent"
              fullWidth
              leftSection={<IconPhone />}
            >
              {houseData?.realtor?.phone}
            </Button>
            <Button fullWidth my="md">
              Contact Agent
            </Button>
          </Group>
        </div>
      )}
    </>
  );
};
