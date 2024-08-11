// components/Header.tsx
import { useState } from "react";
import { Group, Anchor, Container, Box, Image } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header = () => {
  const [active, setActive] = useState(0);
  const logo = {
    url: "/logo.svg",
    description: "logo",
  };

  const mainLinks = [
    { link: "pictures", label: "Pictures" },
    { link: "summary", label: "Summary" },
    { link: "description", label: "Description" },
    { link: "features", label: "Features" },
    { link: "map", label: "Map" },
    { link: "mortgage", label: "Mortgage" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      key={item.label}
      className={styles.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        handleScrollToSection(item.link);
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));
  return (
    <header className={styles.header}>
      <Container size="xl" className={styles.inner}>
        <Link href="/">
          <Image
            src={logo.url}
            alt={logo.description}
            className={styles.logo}
          />
        </Link>
        {/* <ColorSchemeToggle></ColorSchemeToggle> */}
        <Box className={styles.links}>
          <Group gap={0} justify="flex-end" className={styles.mainLinks}>
            {mainItems}
          </Group>
        </Box>
      </Container>
    </header>
  );
};
