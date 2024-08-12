import { Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

import styles from "./styles.module.css";
import Link from "next/link";

export function Footer() {
  const logo = {
    url: "/logo.svg",
    description: "logo",
  };
  return (
    <div className={styles.footer}>
      <Container size="xl" className={styles.inner}>
        <Link href="/">
          <img src={logo.url} alt={logo.description} className={styles.logo} />
        </Link>
        <Group
          gap={0}
          className={styles.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
