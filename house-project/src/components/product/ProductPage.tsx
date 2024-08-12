import { Grid, Container, Group, Divider } from "@mantine/core";
import { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import { AppContext } from "@/providers/AppContextProvider";
import { ProductCarousel } from "./product-carousel";
import { ProductSummary } from "./product-summary";
import { ProductDescription } from "./product-description";
import { ProductFeatures } from "./product-features";
import { AgentCardBlock } from "../agent-card-block";
import { MortgageBlock } from "../mortgage-block/MortgageBlock";
import styles from "./styles.module.css";

export default function ProductPage() {
  // dynamic import because the library i used for the map doesn't support ssr
  const MyAwesomeMap = useMemo(
    () =>
      dynamic(() => import("../map-block/MapBlock"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  const { houseData } = useContext(AppContext);
  if (!houseData) return;

  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Group gap="lg">
            <div id="pictures">
              <ProductCarousel images={houseData?.mediaPhotos} />
            </div>
            <div id="summary">
              <ProductSummary />
            </div>
            <div id="description">
              <ProductDescription description={houseData?.description} />
            </div>
            <div className={styles.container} id="features">
              <Divider my="xs" />
              <ProductFeatures />
            </div>
            <div id="map">
              <Divider my="xs" />
              <MyAwesomeMap coordinates={houseData?.mapCoordinates} />
            </div>
            {!!houseData.price.Koopprijs && (
              <div id="mortgage">
                <Divider my="xs" />

                <MortgageBlock price={houseData.price.Koopprijs} />
              </div>
            )}
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <AgentCardBlock realtor={houseData?.realtor} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
