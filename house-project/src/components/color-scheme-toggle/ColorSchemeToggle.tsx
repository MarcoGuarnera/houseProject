import {
  ActionIcon,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import styles from "./styles.module.css";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center" mt="xl">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun
          className={
            computedColorScheme === "light" ? styles.show : styles.hide
          }
          stroke={1.5}
        />
        <IconMoon
          className={
            computedColorScheme === "light" ? styles.hide : styles.show
          }
          stroke={1.5}
        />
      </ActionIcon>
    </Group>
  );
}
