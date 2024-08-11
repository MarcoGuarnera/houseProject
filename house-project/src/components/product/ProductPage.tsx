// components/MainPage.tsx
import { Grid, Divider, Container, Group } from "@mantine/core";
import { ProductCarousel } from "./product-carousel/ProductCarousel";
import MapBlock from "../map-block/MapBlock";
import MortgageBlock from "../mortgage-block/MortgageBlock";
import { AgentCardBlock } from "../agent-card-block/AgentCardBlock";
import { ProductSummary } from "./product-summary/ProductSummary";
import { ProductDescription } from "./product-description/ProductDescription";
import { ProductFeatures } from "./product-features/ProductFeatures";
import { AppContext } from "@/providers/AppContextProvider";
import { useContext } from "react";

export default function ProductPage() {
  const { houseData } = useContext(AppContext);
  if (!houseData) return;

  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Group gap="lg">
            <section id="pictures">
              <ProductCarousel images={houseData?.mediaPhotos} />
            </section>
            <section id="summary">
              <ProductSummary />
            </section>
            <section id="description">
              <ProductDescription description={houseData?.description} />
            </section>
            <section id="features">
              <ProductFeatures />
            </section>
            <section id="map">
              <MapBlock />
            </section>
            <section id="mortgage">
              <MortgageBlock />
            </section>
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <AgentCardBlock />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
