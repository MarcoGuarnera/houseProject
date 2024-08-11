// components/Header.tsx
import { Group, Button, Tabs, Anchor, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./styles.module.css";
import { ColorSchemeToggle } from "../ColorSchemeToggle";
import Link from "next/link";

export function Header() {
  const logo = {
    url: "/logo.svg",
    description: "logo",
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleScrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    //TODO: METTERE TUTTO DENTRO UN ARRAY E RENDERIZZARE LE TAB CON ID E TITLE
    <header className={styles.header}>
      <Link href="/">
        <img src={logo.url} alt={logo.description} className={styles.logo} />
      </Link>
      <Container size="md">
        <ColorSchemeToggle></ColorSchemeToggle>
        <Tabs
          classNames={{
            root: styles.tabs,
            list: styles.tabsList,
            tab: styles.tab,
          }}
          variant="outline"
          defaultValue="pictures"
        >
          <Tabs.List>
            <Anchor href="#pictures" data-testid="link-pictures">
              Pictures
            </Anchor>
            <Anchor href="#description" data-testid="link-description">
              Description
            </Anchor>
            <Anchor href="#specifics" data-testid="link-specifics">
              Specifics
            </Anchor>
            <Anchor href="#map" data-testid="link-map">
              Map
            </Anchor>
            <Anchor href="#mortgage" data-testid="link-mortgage">
              Mortgage
            </Anchor>
          </Tabs.List>
        </Tabs>
      </Container>
    </header>
  );
}
