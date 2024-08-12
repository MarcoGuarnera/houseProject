import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import "../styles/mantine-component-styles";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ModalContextProvider } from "@/providers/ModalContexProvider";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <ModalContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ModalContextProvider>
    </MantineProvider>
  );
}
