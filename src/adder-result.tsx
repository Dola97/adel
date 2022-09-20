import { Badge, Group, Title } from "@mantine/core";
import { useAdderStore } from "./adder-store";

export const AdderResult = () => {
  const result = useAdderStore((state) => state.result);

  return (
    <Group>
      <Title order={3}>Result</Title>
      <Badge size="xl">
        <Title order={4}>{result}</Title>
      </Badge>
    </Group>
  );
};
