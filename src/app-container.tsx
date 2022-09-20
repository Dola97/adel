import { FC, PropsWithChildren } from "react";
import { AppShell, Center, Group, Header, Title } from "@mantine/core";
import { AdderResult } from "./adder-result";

const headerHeight = 60;

const Flex: FC<PropsWithChildren<{ center?: boolean }>> = ({
  children,
  center,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {children}
    </div>
  );
};

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell
      sx={{ backgroundColor: "#FBFBFB" }}
      styles={{
        body: { padding: "24px", paddingTop: headerHeight + 24 },
        main: { padding: 0 },
      }}
      header={
        <Header height={headerHeight} px="lg">
          <Group position="apart" sx={{ height: "100%" }}>
            <Flex>
              <Title order={3}>React Adder</Title>
            </Flex>
            <Flex center>
              <AdderResult />
            </Flex>
            <Flex />
          </Group>
        </Header>
      }
    >
      <Center>{children}</Center>
    </AppShell>
  );
};
