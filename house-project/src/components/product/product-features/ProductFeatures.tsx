import { Button, Container, Title, useMantineColorScheme } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

interface ProductDescriptionProps {
  description: string;
}

export const ProductFeatures = ({ description }: ProductDescriptionProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const { colorScheme } = useMantineColorScheme();

  // count the number of lines and handle the showMore button logic
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const calculatedLineHeight = parseFloat(computedStyle.lineHeight);
      setLineHeight(calculatedLineHeight);
      const numberOfLines = element.clientHeight / calculatedLineHeight;

      if (numberOfLines > 10) {
        setIsOverflowing(true);
      }
    }
  }, [description]);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  if (!description) return;

  // Renders the right class based on the theme of the page
  const fadeOutClassName = (): string => {
    if (isTruncated && isOverflowing) {
      return colorScheme === "dark"
        ? styles.fade_out_dark
        : styles.fade_out_light;
    }
    return "";
  };

  return (
    <Container size="xl">
      <Title order={2}>Omschrijving</Title>
      <div>
        <div
          ref={textRef}
          className={fadeOutClassName()}
          style={{
            maxHeight:
              isTruncated && isOverflowing ? `${lineHeight * 10}px` : "none",
            overflow: "hidden",
          }}
        >
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        {isOverflowing && (
          <Button
            variant="subtle"
            fullWidth
            className={styles.button}
            onClick={toggleTruncate}
          >
            {isTruncated ? "Show More" : "Show Less"}
          </Button>
        )}
      </div>
    </Container>
  );
};
