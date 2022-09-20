import { FC, useCallback } from "react";
import {
  Paper,
  Stack,
  Group,
  NativeSelect,
  NumberInput,
  Button,
  Text,
} from "@mantine/core";

import { Operation } from "./types";
import { AdderRow, useAdderStore } from "./adder-store";

export const AdderItem: FC<AdderRow> = ({ id, operation, disabled, value }) => {
  const { setRowOperation, toggleDisableRow, deleteRow, updateValue } =
    useAdderStore();

  const onOperationChange = useCallback(
    (value: Operation) => {
      setRowOperation(id, value);
    },
    [id, setRowOperation]
  );

  const onDisabledChange = useCallback(() => {
    toggleDisableRow(id);
  }, [id, toggleDisableRow]);

  const onDelete = useCallback(() => {
    deleteRow(id);
  }, [id, deleteRow]);

  const onValueChange = useCallback(
    (value: number) => {
      updateValue(id, value);
    },
    [id, updateValue]
  );

  return (
    <Paper shadow="md" p="md">
      <Stack spacing="xs">
        <Text size="md" weight="600">{`Adder Row ${id + 1}`}</Text>
        <Group sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <NativeSelect
            disabled={disabled}
            value={operation}
            data={[Operation.Add, Operation.Subtract]}
            placeholder="Pick one"
            label="Operation"
            onChange={(e) => {
              onOperationChange(e.currentTarget.value as Operation);
            }}
          />
          <NumberInput
            disabled={disabled}
            label="Number input"
            value={value}
            onChange={onValueChange}
            type="number"
            min={0}
            sx={{ width: "160px" }}
          />

          <Group spacing="xs">
            <Button
              color={disabled ? "blue" : "gray"}
              variant="outline"
              onClick={onDisabledChange}
              sx={{ width: "100px" }}
            >
              {disabled ? "Enable" : "Disable"}
            </Button>
            <Button
              color="red"
              variant="outline"
              sx={{ width: "100px" }}
              onClick={onDelete}
            >
              Delete
            </Button>
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
};
