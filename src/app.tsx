import { Button, Stack } from "@mantine/core";
import { Fragment, useId, useMemo } from "react";

import { AdderItem } from "./adder-row";
import { useAdderStore } from "./adder-store";

function App() {
  const { rows, addRow } = useAdderStore();
  const id = useId();

  const renderRows = useMemo(() => {
    return rows.map((row) => {
      return (
        <Fragment key={`adder-row-${row.id}-${id}`}>
          <AdderItem {...row} />
        </Fragment>
      );
    });
  }, [rows, id]);

  return (
    <Stack spacing="xl">
      {renderRows}
      <Button variant="outline" mt="xl" onClick={addRow}>
        Add Row
      </Button>
    </Stack>
  );
}

export default App;
