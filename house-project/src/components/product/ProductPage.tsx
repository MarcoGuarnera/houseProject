import { Grid, Container, Group, Divider } from "@mantine/core";
import { ProductCarousel } from "./product-carousel/ProductCarousel";
import MortgageBlock from "../mortgage-block/MortgageBlock";
import { AgentCardBlock } from "../agent-card-block/AgentCardBlock";
import { ProductSummary } from "./product-summary/ProductSummary";
import { ProductDescription } from "./product-description/ProductDescription";
import { ProductFeatures } from "./product-features/ProductFeatures";
import { AppContext } from "@/providers/AppContextProvider";
import { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

export default function ProductPage() {
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
            <div id="mortgage">
              <MortgageBlock />
            </div>
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <AgentCardBlock realtor={houseData?.realtor} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
