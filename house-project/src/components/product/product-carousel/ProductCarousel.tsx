import { Card, Grid, Image, Modal } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/providers/AppContextProvider";
import styles from "./styles.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { ModalContext } from "@/providers/ModalContexProvider";
import { useRouter } from "next/router";

interface ProductCarouselProps {
  images: string[];
}

export const ProductCarousel = ({ images }: ProductCarouselProps) => {
  // const { houseData } = useContext(AppContext);
  const { modalOpened, setModalOpened } = useContext(ModalContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();
  const isNotMobile = useMediaQuery("(min-width: 1007px)");

  // Check if navigation is from the url and if there's an image index it opens the modal to show the correct image
  useEffect(() => {
    const imageIndex = parseInt(router.query.image as string, 10);
    if (!isNaN(imageIndex)) {
      setActiveSlide(imageIndex);
      setModalOpened(true);
    }
  }, [router.query.image]);

  //TODO: mettere immagini di default
  if (!images) return;

  const handleImageClick = (index: number) => {
    setActiveSlide(index);
    setModalOpened(true);
    router.push(`${router.pathname}?image=${index}`, undefined, {
      shallow: true,
    });
  };

  const handleSlideChange = (index: number) => {
    if (!modalOpened) return;
    setActiveSlide(index);
    router.push(`${router.pathname}?image=${index}`, undefined, {
      shallow: true,
    });
  };

  const handleCloseModal = () => {
    setModalOpened(false);
    setActiveSlide(0);
    router.push(router.pathname, undefined, { shallow: true });
  };

  const slides = (px: any) =>
    images?.map((image, index) => (
      <Carousel.Slide key={image} onClick={() => handleImageClick(index)}>
        <Image src={image} height={px} alt={`House image ${index + 1}`} />
      </Carousel.Slide>
    ));

  const createCarousel = (slot: React.ReactNode) => (
    <Carousel
      initialSlide={activeSlide}
      withIndicators
      loop
      onSlideChange={handleSlideChange}
      classNames={{
        root: styles.carousel,
        controls: styles.carouselControls,
        indicator: styles.carouselIndicator,
      }}
    >
      {slot}
    </Carousel>
  );

  return (
    <Card shadow="sm" padding="lg">
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          {createCarousel(slides(380))}
        </Grid.Col>
        {isNotMobile && (
          <Grid.Col span={4}>
            <Grid>
              {images?.slice(1, 3).map((image, index, arr) => (
                <Grid.Col
                  span={12}
                  key={image}
                  className={
                    index === arr.length - 1 ? styles.imageOverlayContainer : ""
                  }
                  onClick={() => handleImageClick(index + 1)}
                >
                  <Image src={image} alt={`House image ${index + 1}`} />
                  {index === arr.length - 1 && (
                    <div className={styles.imageOverlay}>
                      <span className={styles.overlayText}>
                        +{images.length - 2} photos
                      </span>
                    </div>
                  )}
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        )}
      </Grid>

      <Modal
        opened={modalOpened}
        onClose={handleCloseModal}
        size="1000px"
        centered
        withCloseButton
      >
        {createCarousel(slides(600))}
      </Modal>
    </Card>
  );
};
