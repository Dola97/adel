import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { AppContainer } from "./app-container";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppContainer>{children}</AppContainer>
    </MantineProvider>
  );
};
